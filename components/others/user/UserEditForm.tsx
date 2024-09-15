"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import LabelInputContainer from "@/components/others/LabelnputContainer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UserProfile } from "@/types/user";
import BottomGradient from "../BottomGradient";
import { updateUser } from "@/actions/user";
import { toast } from "sonner";
import useFileUpload from "@/lib/file-upload";
import { IconLoader, IconUpload } from "@tabler/icons-react";
import TechStacks from "../TechStacks";
import { Select } from "@/components/ui/select";

const Inputs = ({ user }: { user: UserProfile }) => {
  const { handleFileChange, uploadAllFiles } = useFileUpload();

  const [loading, setLoading] = useState<{
    photo: boolean;
    resume: boolean;
    update: boolean;
  }>({
    photo: false,
    resume: false,
    update: false,
  });

  const [selectedFile, setSelectedFile] = useState<{
    photo: boolean;
    resume: boolean;
  }>({
    photo: false,
    resume: false,
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
    techstacks: user?.techstacks || [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (selectedFile?.photo) {
      setLoading({ ...loading, photo: true });
      const promise = () => uploadAllFiles("photo");
      toast.promise(promise, {
        loading: "Uploading profile photo...",
        success: (res) => {
          setData({ ...data, photo: res });
          setSelectedFile({ ...selectedFile, photo: false });
          setLoading({ ...loading, photo: false });
          return "Profile photo updated successfully !";
        },
        error: "Error uploading profile photo. ",
      });
    }
  };

  const handleResume = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (selectedFile?.resume) {
      setLoading({ ...loading, resume: true });
      const promise = () => uploadAllFiles("pdf");
      toast.promise(promise, {
        loading: "Uploading resume...",
        success: (res) => {
          setData({ ...data, resume: res });
          setSelectedFile({ ...selectedFile, resume: false });
          setLoading({ ...loading, resume: false });
          return "Resume uploaded successfully !";
        },
        error: "Error uploading resume. ",
      });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(data)

    if (selectedFile?.photo) {
      profilebuttonRef.current?.focus();
      if (profilebuttonRef.current) {
        profilebuttonRef.current.style.border = "2px solid #fff";
      }
      return toast.error("Please upload your profile photo");
    }

    if (selectedFile?.resume) {
      resumebuttonRef.current?.focus();
      if (resumebuttonRef.current) {
        resumebuttonRef.current.style.border = "2px solid #fff";
      }
      return toast.error("Please upload your resume");
    }

    if (selectedFile?.resume) {
      return toast.error("Please upload your resume");
    }

    setLoading({ ...loading, update: true });

    updateUser({ ...data, experience: Number(data.experience) })
      .then((res: any) => {
        if (!res) {
          toast.error("Something went wrong");
          return;
        }
        if (typeof res === "object") {
          setData(res);
          toast.success("Profile updated successfully !");
        } else {
          toast.error(res);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.message || "Something went wrong");
      })
      .finally(() => {
        setLoading({ ...loading, update: false });
      });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4 ">
        <LabelInputContainer>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            value={data?.fullName}
            id="fullName"
            onChange={handleChange}
            placeholder="Full Name"
            type="text"
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="email">Email</Label>
          <Input
            readOnly
            value={data?.email}
            id="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
          />
        </LabelInputContainer>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            value={data?.phoneNumber ?? ""}
            id="phoneNumber"
            placeholder="Phone Number"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="role">Current Role</Label>
          <Input
            value={data?.role ?? ""}
            id="role"
            placeholder="Current Role"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer className="mb-3 lg:mb-0">
          <Label htmlFor="working">Working ?</Label>
          <Select
            value={data?.isWorking ? "true" : "false"}
            onChange={() => {
              setData({ ...data, isWorking: !data.isWorking });
            }}
            id="working"
            className="min-h-[40px]"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Select>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="company">Company</Label>
          <Input
            id="company"
            value={data?.company ?? ""}
            placeholder="Company Name"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="experience">Experience (in Years)</Label>
          <Input
            id="experience"
            value={data?.experience ?? ""}
            placeholder="Experience in Years"
            type="number"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="preferredRole">Preffered Role</Label>
          <Input
            id="preferredRole"
            value={data?.preferredRole ?? ""}
            placeholder="Preffered Role"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="currentCTC">Current CTC</Label>
          <Input
            id="currentCTC"
            value={data?.currentCTC ?? ""}
            placeholder="Current CTC"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="expectedCTC">Expected CTC</Label>
          <Input
            id="expectedCTC"
            value={data?.expectedCTC ?? ""}
            placeholder="Expected CTC"
            type="text"
            onChange={handleChange}
          />
        </LabelInputContainer>
      </div>

      <div className="space-y-2 md:space-y-0 md:space-x-2 mb-4 w-full">
        <Label htmlFor="techstacks">Tech Stacks</Label>
        <TechStacks data={data} setData={setData} />
      </div>

      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="profile">Profile Photo</Label>

          <div className={`flex gap-2`}>
            <div
              className={`flex-none ${selectedFile?.photo ? "w-[85%]" : "w-[100%]"}`}
            >
              <Input
                onChange={(e) => {
                  handleFileChange(e, "photo");
                  setSelectedFile({ ...selectedFile, photo: true });
                }}
                id="profile"
                placeholder="Profile"
                type="file"
              />
            </div>

            {selectedFile.photo && (
              <div className="flex-1 w-[10%]">
                <button
                  ref={profilebuttonRef}
                  onClick={(e: any) => {
                    handleProfilePhoto(e);
                  }}
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-full font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
                  type="button"
                >
                  {loading.photo ? (
                    <IconLoader className="h-4 w-4 text-neutral-800 dark:text-neutral-300 animate-spin" />
                  ) : (
                    <IconUpload className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  )}
                  <BottomGradient />
                </button>
              </div>
            )}
          </div>
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="resume">Resume</Label>
          <div className={`flex gap-2`}>
            <div
              className={`flex-none ${selectedFile?.resume ? "w-[85%]" : "w-[100%]"}`}
            >
              <Input
                onChange={(e) => {
                  handleFileChange(e, "pdf");
                  setSelectedFile({ ...selectedFile, resume: true });
                }}
                id="profile"
                placeholder="Profile"
                type="file"
              />
            </div>
            {selectedFile.resume && (
              <div className="flex-1 w-[10%]">
                <button
                  ref={resumebuttonRef}
                  onClick={(e: any) => {
                    handleResume(e);
                  }}
                  className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-full font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center"
                  type="button"
                >
                  {loading.resume ? (
                    <IconLoader className="h-4 w-4 text-neutral-800 dark:text-neutral-300 animate-spin" />
                  ) : (
                    <IconUpload className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  )}
                  <BottomGradient />
                </button>
              </div>
            )}
          </div>
        </LabelInputContainer>
      </div>

      <button
        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
        disabled={
          loading.update == true ||
          loading.resume == true ||
          loading.photo == true
        }
        onClick={(e: any) => {
          handleSubmit(e);
        }}
      >
        {loading.update ? "Loading..." : "Save Changes \u2192"}

        <BottomGradient />
      </button>
    </div>
  );
};

export default Inputs;
