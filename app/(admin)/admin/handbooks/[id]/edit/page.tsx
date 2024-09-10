'use client'
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconNotes } from '@tabler/icons-react';
import { Cover } from '@/components/ui/cover';
import { handbookSchema, HandbookType } from '@/types';
import Spinner from '@/components/others/Spinner';
import BottomGradient from '@/components/others/BottomGradient';
import Link from 'next/link';
import { UpdateHandbook } from '@/actions/handbooks';
import { toast } from 'sonner';


export default function UpdateInterview({ params }: { params: { id: string } }) {

    const [loading, setLoading] = useState({
        loading: false,
        u_loading: false
    });
    const [handbook, setHandbook] = useState<HandbookType | null>(null);


    useEffect(() => {
        const fetchHandbook = async () => {
            try {
                setLoading({ ...loading, loading: true });
                const res = await fetch(`/api/handbook/${params.id}`);
                const data = await res.json();
                setHandbook(data?.handbook);
            } catch (error) {
                console.error("Error fetching handbook:", error);
            } finally {
                setLoading({ ...loading, loading: false });
            }
        };

        fetchHandbook();
    }, [params.id]);


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const parseddata = handbookSchema.safeParse(handbook);

        if (!parseddata.success) {
            return toast.error(parseddata.error.errors[0].message)
        }

        if (handbook) {
            setLoading({ ...loading, u_loading: true })
            UpdateHandbook({ handbook })
                .then((res) => {
                    if (res) {
                        toast.success("Handbook updated")
                    } else {
                        toast.error("Error updating handbook")
                    }
                })
                .catch((error) => {
                    toast.error("Error updating handbook")
                })
                .finally(() => {
                    setLoading({ ...loading, u_loading: false })
                })
        } else {
            toast.error("Error updating handbook")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setHandbook({ ...handbook, [e.target.name]: e.target.value } as HandbookType)
    }



    if (loading?.loading) {
        return (
            <div className="flex justify-center items-center h-screen w-full">
                <Spinner />
            </div>
        )
    }

    return (
        <div className='w-full'>
            <div className=' p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] '>
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Update Handbook
                        </Cover>
                    </h2>
                    <div className="w-full md:w-[200px]">
                        <Link href="/admin/handbooks">
                            <div
                                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <IconNotes className="w-4 h-4" />
                                <span className="flex-shrink-0">All Handbooks</span>
                                <BottomGradient />
                            </div>
                        </Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-0 lg:mt-0">
                        <Card>
                            <CardHeader>
                                <CardTitle>Interview Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title">Title</Label>
                                    <Input id="title" name='title' placeholder="Enter the title" onChange={handleChange} defaultValue={handbook?.title} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="link">Notion Id</Label>
                                    <Input id="link" name='link'
                                        onChange={handleChange} placeholder="Enter the notion Id" defaultValue={handbook?.link} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Description</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="description"> Description</Label>
                                    <Textarea
                                        name='description'
                                        id="description"
                                        onChange={handleChange}
                                        placeholder="Enter the description"
                                        className="min-h-[150px]"
                                        defaultValue={handbook?.description}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-6 flex justify-end space-x-4 mb-40">
                        <Link href="/admin/handbooks">
                            <button
                                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full md:w-[200px] text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] cursor-pointer"
                            >
                                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                    Cancel
                                </span>
                                <BottomGradient />
                            </button>
                        </Link>
                        <button
                            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full md:w-[200px] text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] cursor-pointer"
                            type='submit'
                            disabled={loading.u_loading}
                        >
                            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                                {loading.u_loading ? "Saving..." : " Save Changes"}
                            </span>
                            <BottomGradient />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}