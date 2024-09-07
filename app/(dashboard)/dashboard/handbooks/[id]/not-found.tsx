'use client';
import BottomGradient from '@/components/others/BottomGradient';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function GlobalError() {
    const router = useRouter();
    useEffect(() => {
        document.title = '400 : Notes could not be found';
    }, []);
    const handleClick = () => {
        document.title =
            '400 : Notes could not be found - 100x Prep';
        router.push('/');
    };
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
            <h1 className="mb-4 text-6xl font-semibold text-white">400</h1>
            <p className="mb-4 text-md dark:text-white">Oops! Notes could not be found.</p>

            <button
                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                onClick={handleClick}
            >

                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Go to home
                </span>
                <BottomGradient />
            </button>
        </div>
    );
}
