"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import BottomGradient from "./BottomGradient";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { registerSchema, RegisterType } from "@/types/auth";
import SocialLogin from "./SocialLogin";

export function Register() {
  const [loading, setLoading] = React.useState<Boolean>(false);

  const [credentials, setCredentials] = React.useState<RegisterType>({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed_data = registerSchema.safeParse(credentials);

    if (!parsed_data.success) {
      return toast.error(parsed_data.error.errors[0].message);
    }

    if (parsed_data?.data?.password !== parsed_data?.data?.confirmPassword) {
      return toast.error("Passwords do not match");
    }

    setLoading(true);
    const res = await signIn("credentials", {
      name: parsed_data?.data?.name,
      username: parsed_data?.data?.username,
      password: parsed_data?.data?.password,
      confirmPassword: parsed_data?.data?.confirmPassword,
      redirect: false,
    });

    if (res?.ok) {
      toast.success("Registration Successful");
      router.push("/dashboard");
      setLoading(false);
    }

    if (res?.error) {
      toast.error(res.error || "Something went wrong");
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black mt-20 lg:mt-5">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to 100x Prep
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Register to 100x Prep and start your journey
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Name"
              type="text"
              onChange={handleChange}
              name="name"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              onChange={handleChange}
              name="username"
            />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
              name="password"
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              id="confirmPassword"
              placeholder="••••••••"
              type="password"
              onChange={handleChange}
              name="confirmPassword"
            />
          </LabelInputContainer>
        </div>

        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          {loading ? "Loading..." : "Register \u2192"}
          <BottomGradient />
        </button>
        <div className="mt-5">
          <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-neutral-700 dark:text-neutral-300 font-semibold"
            >
              Sign in
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
      <SocialLogin />
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
