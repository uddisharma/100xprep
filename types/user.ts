export type UserProfile = {
    id: string;
    email: string;
    password: string | null;
    fullName: string;
    phoneNumber: string | null;
    isWorking: boolean;
    experience: number | null;
    company: string | null;
    role: string | null;
    preferredRole: string | null;
    currentCTC: string | null;
    expectedCTC: string | null;
    resume: string | null;
    photo: string;
};
