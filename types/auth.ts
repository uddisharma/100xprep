import { messages } from "@/config/messages";
import z from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: messages.emailIsRequired })
    .email({ message: messages.emailValidation }),
  password: z.string().min(8, { message: messages.passwordValidation }),
});

export type LoginType = z.infer<typeof loginSchema>;

const registerSchema = z.object({
  name: z.string().min(1, { message: messages.nameValidation }),
  username: z.string().email({ message: messages.emailValidation }),
  password: z.string().min(8, { message: messages.passwordValidation }),
  confirmPassword: z.string().min(8, { message: messages.passwordValidation }),
});

export type RegisterType = z.infer<typeof registerSchema>;

export { loginSchema, registerSchema };
