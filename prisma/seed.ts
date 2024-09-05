import { PrismaClient } from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function hashPassword(password: string): Promise<string> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

async function main() {
    // Create Users
    const user1 = await prisma.user.create({
        data: {
            email: 'user1@example.com',
            fullName: 'User One',
            password: await hashPassword("password1"),
            phoneNumber: '1234567890',
            isWorking: true,
            experience: 5,
            company: 'Company One',
            role: 'Developer',
            preferredRole: 'Full Stack Developer',
            currentCTC: '100000',
            expectedCTC: '150000',
            resume: 'resume1.pdf',
            photo: 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
            techstacks: ["HTML CSS", "JavaScript", "TypeScript"],
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'user2@example.com',
            fullName: 'User Two',
            password: await hashPassword("password2"),
            phoneNumber: '0987654321',
            isWorking: false,
            experience: 3,
            company: 'Company Two',
            role: 'Designer',
            preferredRole: 'UI/UX Designer',
            currentCTC: '80000',
            expectedCTC: '120000',
            resume: 'resume2.pdf',
            photo: 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
            techstacks: ["React.js", "Next.js", "Zod"]
        },
    });

    const user3 = await prisma.user.create({
        data: {
            email: 'user3@example.com',
            fullName: 'User Three',
            password: await hashPassword("password3"),
            phoneNumber: '1122334455',
            isWorking: true,
            experience: 7,
            company: 'Company Three',
            role: 'Manager',
            preferredRole: 'Project Manager',
            currentCTC: '200000',
            expectedCTC: '250000',
            resume: 'resume3.pdf',
            photo: 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
            techstacks: ["Redux", "Recoil", "TurboRepo", "Full Frontend"]
        },
    });

    // Create Accounts
    await prisma.account.createMany({
        data: [
            {
                userId: user1.id,
                provider: 'github',
                providerAccountId: 'github-user1',
                expires_at: null,
            },
            {
                userId: user2.id,
                provider: 'google',
                providerAccountId: 'google-user2',
                expires_at: null,
            },
            {
                userId: user3.id,
                provider: 'credentials',
                providerAccountId: 'credentials-user3',
                expires_at: null,
            },
        ],
    });

    // Create Jobs
    await prisma.job.createMany({
        data: [
            {
                title: 'Frontend Developer',
                description: 'Develop and maintain web applications.',
                location: 'Remote',
                salary: '120000',
                company: 'Tech Corp',
                link: 'https://techcorp.com/jobs/frontend-developer',
                requirements: ['JavaScript', 'React', 'CSS'],
                startDate: new Date('2023-01-01'),
                endDate: new Date('2023-12-31'),
            },
            {
                title: 'Backend Developer',
                description: 'Develop and maintain server-side applications.',
                location: 'On-site',
                salary: '130000',
                company: 'Backend Inc',
                link: 'https://backendinc.com/jobs/backend-developer',
                requirements: ['Node.js', 'Express', 'MongoDB'],
                startDate: new Date('2023-02-01'),
                endDate: new Date('2023-11-30'),
            },
            {
                title: 'UI/UX Designer',
                description: 'Design user interfaces and user experiences.',
                location: 'Hybrid',
                salary: '110000',
                company: 'Design Studio',
                link: 'https://designstudio.com/jobs/ui-ux-designer',
                requirements: ['Figma', 'Sketch', 'Adobe XD'],
                startDate: new Date('2023-03-01'),
                endDate: new Date('2023-10-31'),
            },
        ],
    });

    // Create Interview Pairings
    const interview1 = await prisma.interviewPairing.create({
        data: {
            user1Id: user1.id,
            user2Id: user2.id,
            scheduledAt: new Date('2023-03-01T09:00:00Z'),
            isCompleted: true,
        },
    });

    const interview2 = await prisma.interviewPairing.create({
        data: {
            user1Id: user2.id,
            user2Id: user3.id,
            scheduledAt: new Date('2023-04-01T10:00:00Z'),
            isCompleted: true,
        },
    });

    const interview3 = await prisma.interviewPairing.create({
        data: {
            user1Id: user3.id,
            user2Id: user1.id,
            scheduledAt: new Date('2023-05-01T11:00:00Z'),
            isCompleted: true,
        },
    })

    // Create Email Logs
    await prisma.emailLog.createMany({
        data: [
            {
                interviewPairingId: interview1.id,
                emailSentAt: new Date('2023-04-01T09:00:00Z'),
            },
            {
                interviewPairingId: interview2.id,
                emailSentAt: new Date('2023-05-01T10:00:00Z'),
            },
            {
                interviewPairingId: interview3.id,
                emailSentAt: new Date('2023-06-01T11:00:00Z'),
            },
        ],
    });
}

main()
    .then(() => {
        console.log('Seeding complete!');
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });