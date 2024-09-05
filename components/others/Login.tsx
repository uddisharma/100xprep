"use client";
import React, { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import {
    IconBrandGithub,
    IconBrandGoogle,
} from "@tabler/icons-react";
import BottomGradient from "./BottomGradient";
import LabelInputContainer from "./LabelnputContainer";
import Link from "next/link";
import { toast } from "sonner";
import { loginSchema } from "@/types/auth";

export function Login() {
    const router = useRouter();
    const [loading, setLoading] = React.useState<Boolean>(false);

    const [credentials, setCredentials] = React.useState({
        username: "",
        password: ""
    })

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();


        const parsed_data = loginSchema.safeParse(credentials);

        if (!parsed_data.success) {
            return toast.error(parsed_data.error.errors[0].message)
        }
        setLoading(true)
        const res = await signIn("credentials", {
            username: parsed_data.data.username,
            password: parsed_data.data.password,
            redirect: false
        })

        if (res?.ok) {
            toast.success("Login Successful")
            router.push("/dashboard")
            setLoading(false)
        }

        if (res?.error) {
            toast.error(res.error)
            setLoading(false)
        }

    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-20 lg:mt-10 ">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to 100x Prep
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Login to 100x Prep and start your journey
            </p>

            <form className="my-8" onSubmit={handleSubmit}>

                <LabelInputContainer className="mb-4">
                    <Label htmlFor="email">Email Address</Label>
                    <Input value={credentials.username} name="username" placeholder="name@example.com" onChange={handleChange} type="email" />
                </LabelInputContainer>
                <LabelInputContainer className="mb-4">
                    <Label htmlFor="password">Password</Label>
                    <Input value={credentials.password} onChange={handleChange} name="password" placeholder="••••••••" type="password" />
                </LabelInputContainer>

                <button
                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    {loading ? "Loading..." : "Login \u2192"}
                    <BottomGradient />
                </button>

                <div className="mt-5">
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-neutral-700 dark:text-neutral-300 font-semibold"
                        >
                            Sign up
                        </Link>
                    </p>
                    <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                        Want to go back?{" "}
                        <Link
                            href="/"
                            className="text-neutral-700 dark:text-neutral-300 font-semibold"
                        >
                            Click here
                        </Link>
                    </p>
                </div>
            </form>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-4 h-[1px] w-full" />
            <div className="flex flex-col space-y-4">
                <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    onClick={() => {
                        signIn('github').then((res) => {

                            toast.success("Signed in successfully !")

                        })
                            .catch((error) => {
                                toast.error(error.message || "Something went wrong !")
                            })
                    }}
                >
                    <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        GitHub
                    </span>
                    <BottomGradient />
                </button>
                <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    onClick={() => {
                        signIn('google').then((res) => {
                            toast.success("Signed in successfully !")
                        })
                            .catch((error) => {
                                toast.error(error.message || "Something went wrong !")
                            })
                    }}
                >
                    <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                        Google
                    </span>
                    <BottomGradient />
                </button>
            </div>

        </div>
    );
}




