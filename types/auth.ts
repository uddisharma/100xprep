import z from 'zod';

const loginSchema = z.object({
    username: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
});

export type LoginType = z.infer<typeof loginSchema>;

const registerSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
    name: z.string().min(1, { message: "Name is required" }),
});

export type Register = z.infer<typeof registerSchema>;

export { loginSchema, registerSchema };
