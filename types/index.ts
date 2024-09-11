import { messages } from "@/config/messages";
import { z } from "zod";
import { zfd } from "zod-form-data";

export const handbookSchema = zfd.formData({
    title: zfd.text(z.string().min(1, { message: messages.titleRequired })),
    description: zfd.text(z.string().min(1, { message: messages.description })),
    link: zfd.text(z.string().min(1, { message: messages.notionId })),
    id: zfd.text(z.string().optional()),
});

export type HandbookType = z.infer<typeof handbookSchema>


export type ServerActionResponse = {
    result: {
        data?: {
            message?: string,
        },
        serverError?: string,

        validationErrors?: Record<string, string[] | undefined> | undefined,

    }
}