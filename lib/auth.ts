import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { prisma } from '@/db/db';
import { loginSchema, registerSchema, RegisterType } from "@/types/auth";
import * as bcrypt from 'bcrypt';

const comparePassword = bcrypt.compare;

export async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

export const NEXT_AUTH_CONFIG = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
            async profile(profile: any) {
                const user = await prisma.user.upsert({
                    where: { email: profile.email },
                    update: {},
                    create: {
                        email: profile.email,
                        fullName: profile.name,
                        photo: profile.avatar_url,
                        accounts: {
                            create: {
                                provider: 'github',
                                providerAccountId: String(profile.id),
                                expires_at: profile.exp
                            }
                        }
                    }
                });
                return { id: user.id, email: user.email, name: user.fullName, image: user.photo };
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            async profile(profile) {
                const user = await prisma.user.upsert({
                    where: { email: profile.email },
                    update: {},
                    create: {
                        email: profile.email,
                        fullName: profile.name,
                        photo: profile.picture,
                        accounts: {
                            create: {
                                provider: 'google',
                                providerAccountId: profile.sub,
                                expires_at: profile.exp
                            }
                        }
                    }
                });

                return { id: user.id, email: user.email, name: user.fullName, photo: user.photo };
            }
        }),
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                name: { label: 'name', type: 'text', placeholder: '' },
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
                confirmPassword: { label: 'confirm password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: RegisterType | undefined) {

                if (!credentials) return null;

                let parsed_data

                if (credentials?.name) {
                    parsed_data = registerSchema.safeParse(credentials);
                } else {
                    parsed_data = loginSchema.safeParse(credentials);
                }

                if (!parsed_data.success) throw new Error(parsed_data.error.message);

                const existingUser = await prisma.user.findUnique({ where: { email: credentials.username }, include: { accounts: true } });

                

                if (existingUser) {

                    if (existingUser.accounts.length > 0 && existingUser.accounts[0].provider !== 'credentials') {

                        throw new Error(`Please login with your ${existingUser.accounts[0].provider} account`);

                    } else {

                        if (existingUser.password === null)
                            throw new Error('Something went wrong');

                        const isPasswordValid = await comparePassword(credentials.password, existingUser.password);

                        if (!isPasswordValid) {
                            throw new Error('Invalid password');
                        }

                        return {
                            id: existingUser.id,
                            email: existingUser.email,
                            name: existingUser.fullName,
                            photo: existingUser.photo,
                        };
                    }
                } else {

                    const hashedPassword = await hashPassword(credentials.password);

                    const newUser = await prisma.user.create({
                        data: {
                            email: credentials.username,
                            fullName: credentials.name,
                            password: hashedPassword,
                            accounts: {
                                create: {
                                    provider: 'credentials',
                                    providerAccountId: String(Math.random()),
                                    expires_at: null
                                }
                            }
                        }
                    });

                    return {
                        id: newUser.id,
                        email: newUser.email,
                        name: newUser.fullName,
                        photo: null,
                    };
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,

    callbacks: {
        jwt: async ({ user, token }: any) => {
            if (user) {
                token.uid = user.id;
                token.role = process.env.ADMINS?.split(',').includes(user.email) ? 'admin' : 'user';
                user.role = process.env.ADMINS?.split(',').includes(user.email) ? 'admin' : 'user';
            }
            return token;
        },
        session: async ({ session, token }: any) => {
            if (session.user) {
                session.user.id = token.uid;
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: '/login',
    }
};