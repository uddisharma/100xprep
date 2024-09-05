'use client'

import React, { ChangeEvent, FormEvent, useState } from 'react'
import LabelInputContainer from "@/components/others/LabelnputContainer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ReactSelectSingle from "@/components/others/ReactSelectSingle";
import { UserProfile } from '@/types/user'
import BottomGradient from '../BottomGradient'
import { updateUser } from '@/actions/user'
import { toast } from 'sonner'
import useFileUpload from '@/lib/file-upload'
import { IconLoader, IconUpload } from '@tabler/icons-react'

const Inputs = ({ user }: { user: UserProfile }) => {

    const { handleFileChange, handleUpload } = useFileUpload();

    const [loading, setLoading] = useState<{ photo: boolean, resume: boolean, update: boolean }>({
        photo: false,
        resume: false,
        update: false
    })

    const [selectedFile, setSelectedFile] = useState<{ photo: boolean, resume: boolean }>({
        photo: false,
        resume: false
    });

    const profilebuttonRef = React.createRef<HTMLButtonElement>();
    const resumebuttonRef = React.createRef<HTMLButtonElement>();

    const [data, setData] = useState<UserProfile>({
        id: user?.id || "",
        email: user?.email || "",
        password: user?.password || null,
        fullName: user?.fullName || "",
        phoneNumber: user?.phoneNumber || "",
        isWorking: user?.isWorking || false,
        experience: user?.experience || 0,
        company: user?.company || "",
        role: user?.role || "",
        preferredRole: user?.preferredRole || "",
        currentCTC: user?.currentCTC || "",
        expectedCTC: user?.expectedCTC || "",
        resume: user?.resume || "",
        photo: user?.photo || "",
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const handleProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (selectedFile?.photo) {
            setLoading({ ...loading, photo: true });
            const promise = () => handleUpload();
            toast.promise(promise, {
                loading: 'Uploading profile photo...',
                success: (res) => {
                    setData({ ...data, photo: res })
                    setSelectedFile({ ...selectedFile, photo: false })
                    setLoading({ ...loading, photo: false })
                    return "Profile photo updated successfully !";
                },
                error: 'Error uploading profile photo. ',
            });
        }
    }

    const handleResume = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        if (selectedFile?.resume) {
            setLoading({ ...loading, resume: true });
            const promise = () => handleUpload();
            toast.promise(promise, {
                loading: 'Uploading resume...',
                success: (res) => {
                    setData({ ...data, resume: res })
                    setSelectedFile({ ...selectedFile, resume: false })
                    setLoading({ ...loading, resume: false })
                    return "Resume uploaded successfully !";
                },
                error: 'Error uploading resume. ',
            });
        }
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (selectedFile?.photo) {
            profilebuttonRef.current?.focus();
            if (profilebuttonRef.current) {
                profilebuttonRef.current.style.border = "2px solid #fff";
            }
            return toast.error("Please upload your profile photo")
        }

        if (selectedFile?.resume) {
            resumebuttonRef.current?.focus();
            if (resumebuttonRef.current) {
                resumebuttonRef.current.style.border = "2px solid #fff";
            }
            return toast.error("Please upload your resume")
        }

        if (selectedFile?.resume) {
            return toast.error("Please upload your resume")
        }

        console.log(data)

        setLoading({ ...loading, update: true });

        updateUser({ ...data, experience: Number(data.experience) })
            .then((res) => {
                if (res) {
                    toast("Profile updated successfully")
                    setData(res)
                    return
                } else {
                    toast.warning("Something went wrong")
                }
            })
            .catch((err) => {
                console.log(err)
                toast.error(err?.message || "Something went wrong")
            })
            .finally(() => {
                setLoading({ ...loading, update: false });
            })
    }

    return (
        <>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Input value={data?.fullName} id="fullname" onChange={handleChange} placeholder="Full Name" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Input readOnly value={data?.email} id="email" placeholder="Email" type="email" onChange={handleChange} />
                </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Input value={data?.phoneNumber ?? ""} id="phoneNumber" placeholder="Phone Number" type="number" onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Input value={data?.role ?? ""} id="role" placeholder="Current Role" type="text" onChange={handleChange} />
                </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer className="mb-3 lg:mb-0">
                    <ReactSelectSingle data={data} setData={setData} />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Input id="company" value={data?.company ?? ""} placeholder="Company Name" type="text" onChange={handleChange} />
                </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Input id="experience" value={data?.experience ?? ""} placeholder="Experience in Years" type="number" onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Input id="preferredRole" value={data?.preferredRole ?? ""} placeholder="Preffered Role" type="text" onChange={handleChange} />
                </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Input id="currentCTC" value={data?.currentCTC ?? ""} placeholder="Current CTC" type="text" onChange={handleChange} />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Input id="expectedCTC" value={data?.expectedCTC ?? ""} placeholder="Expected CTC" type="text" onChange={handleChange} />
                </LabelInputContainer>
            </div>

            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                    <Label htmlFor="profile" >Profile Photo</Label>

                    <div className={`flex gap-2`}>
                        <div className={`flex-none ${selectedFile?.photo ? "w-[85%]" : "w-[100%]"}`}>
                            <Input onChange={(e) => {
                                handleFileChange(e)
                                setSelectedFile({ ...selectedFile, photo: true })
                            }} id="profile" placeholder="Profile" type="file" />
                        </div>

                        {selectedFile.photo &&
                            <div className="flex-1 w-[10%]">
                                <button
                                    ref={profilebuttonRef}
                                    onClick={(e: any) => {
                                        handleProfilePhoto(e)
                                    }}
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-full font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
                                    type='button'
                                >
                                    {loading.photo ? <IconLoader className="h-4 w-4 text-neutral-800 dark:text-neutral-300 animate-spin" /> : <IconUpload className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />}
                                    <BottomGradient />
                                </button>
                            </div>
                        }
                    </div>
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="resume">Resume</Label>
                    <div className={`flex gap-2`}>
                        <div className={`flex-none ${selectedFile?.resume ? "w-[85%]" : "w-[100%]"}`}>
                            <Input onChange={(e) => {
                                handleFileChange(e)
                                setSelectedFile({ ...selectedFile, resume: true })
                            }} id="profile" placeholder="Profile" type="file" />
                        </div>
                        {selectedFile.resume &&
                            <div className="flex-1 w-[10%]">
                                <button
                                    ref={resumebuttonRef}
                                    onClick={(e: any) => {
                                        handleResume(e)
                                    }}
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-full font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
                                    type='button'
                                >
                                    {loading.resume ? <IconLoader className="h-4 w-4 text-neutral-800 dark:text-neutral-300 animate-spin" /> : <IconUpload className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />}
                                    <BottomGradient />
                                </button>
                            </div>
                        }
                    </div>

                </LabelInputContainer>
            </div>

            <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                disabled={loading.update == true || loading.resume == true || loading.photo == true}
                onClick={(e: any) => {
                    handleSubmit(e)
                }}
            >
                {loading.update ? "Loading..." : "Save Changes \u2192"}

                <BottomGradient />
            </button>
        </>
    )
}

export default Inputs