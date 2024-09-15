import { messages } from "@/config/messages";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const handbookSchema = zfd.formData({
  title: zfd.text(z.string().min(1, { message: messages.titleRequired })),
  description: zfd.text(z.string().min(1, { message: messages.description })),
  link: zfd.text(z.string().min(1, { message: messages.notionId })),
  id: zfd.text(z.string().optional()),
});

export type HandbookType = z.infer<typeof handbookSchema>;

export const HandbookRequestSchema = zfd?.formData({
  id: zfd.text(z.string().optional()),
  title: zfd.text(z.string().min(1, { message: messages.titleRequired })),
  description: zfd.text(z.string().min(1, { message: messages.description })),
});

export type HandbookRequestType = z.infer<typeof HandbookRequestSchema>;

export const jobSchema = zfd.formData({
  title: zfd.text(z.string().min(1, { message: messages.titleRequired })),
  description: zfd.text(z.string().min(1, { message: messages.description })),
  company: zfd.text(z.string().min(1, { message: messages.company })),
  location: zfd.text(z.string().min(1, { message: messages.location })),
  requirements: zfd.text(z.string().min(1, { message: messages.requirements })),
  salary: zfd.text(z.string().min(1, { message: messages.salary })),
  startDate: zfd.text(z.string().min(1, { message: messages.startDate })),
  endDate: zfd.text(z.string().min(1, { message: messages.endDate })),
  link: zfd.text(z.string().min(1, { message: messages.link })),
  id: zfd.text(z.string().optional()),
});

export type JobType = z.infer<typeof jobSchema>;

export type ServerActionResponse = {
  result: {
    data?: {
      message?: string;
    };
    serverError?: string;
    validationErrors?: Record<string, string[] | undefined> | undefined;
  };
};
