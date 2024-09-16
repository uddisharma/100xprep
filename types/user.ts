import { z } from "zod";
import { zfd } from "zod-form-data";

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
  techstacks: string[];
};

export const userProfileSchema=zfd?.formData({
  id: zfd.text(z.string().optional()),
  fullName: zfd.text(z.string().min(1, { message: "Full Name is required" })),
  email: zfd.text(z.string().min(1, { message: "Email is required" })),
  phoneNumber: zfd.text(z.string().optional()),
  resume: zfd.text(z.string().optional()),
  photo: zfd.text(z.string().optional()),
  techstacks: zfd.text(z.string().optional()),
  role: zfd.text(z.string().optional()),
  preferredRole: zfd.text(z.string().optional()),
  currentCTC: zfd.text(z.string().optional()),
  expectedCTC: zfd.text(z.string().optional()),
  experience: zfd.text(z.string().optional()),
  company: zfd.text(z.string().optional()),
  isWorking: zfd.text(z.string().optional()),
})

export type UserProfile1 = {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string | null;
  resume: string | null;
  createdAt: Date;
};

