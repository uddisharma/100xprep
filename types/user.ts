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
import { z } from "zod";
import { zfd } from "zod-form-data";

// Define the schema
export const userProfileSchema = zfd.formData({
  id: zfd.text(z.string().min(1, { message: "ID is required" })),
  email: zfd.text(z.string().email({ message: "Invalid email address" })),
  password: zfd.text(z.string().nullable()),
  fullName: zfd.text(z.string().min(1, { message: "Full name is required" })),
  phoneNumber: zfd.text(z.string().nullable()),
  isWorking: zfd.checkbox(z.boolean()),
  experience: zfd.text(z.string().nullable()),
  company: zfd.text(z.string().nullable()),
  role: zfd.text(z.string().nullable()),
  preferredRole: zfd.text(z.string().nullable()),
  currentCTC: zfd.text(z.string().nullable()),
  expectedCTC: zfd.text(z.string().nullable()),
  resume: zfd.text(z.string().nullable()),
  photo: zfd.text(z.string().min(1, { message: "Photo is required" })),
  techstacks: zfd.array(zfd.text(z.string())),
});

// Infer the TypeScript type
export type UserProfileType = z.infer<typeof userProfileSchema>;
