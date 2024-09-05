import BottomGradient from "@/components/others/BottomGradient";
import Profile from "@/components/others/profile/Profile";
import { getUserDetails } from "@/lib/getDetails";
import { UserProfile } from "@/types/user";
import { headers } from "next/headers";
import Link from "next/link";

export default async function InterviewProfile() {
    const req: any = {
        headers: headers(),
    };

    const user = await getUserDetails(req);

    if (!user) {
        return (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
                <h1 className="mb-4 text-6xl font-semibold text-white">500</h1>
                <p className="mb-4 text-md dark:text-white">Oops! User Not Found.</p>
                <Link href={'/login'} >
                    <button

                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Login here
                        </span>
                        <BottomGradient />
                    </button>
                </Link>
            </div>
        )
    }

    const userProfile: UserProfile = user as UserProfile;

    const user1 = {
        ...userProfile,
        isWorking: userProfile.isWorking ?? false,
    };
    return (
        <div className="container mx-auto p-4 space-y-6 h-[100vh] overflow-y-scroll w-full m-auto">
            <Profile user={user1} />
        </div>
    );
}