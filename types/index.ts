import { messages } from "@/config/messages";
import { z } from "zod";


export const handbookSchema = z.object({
    id: z.string().uuid(),
    title: z.string().min(1, { message: messages?.titleRequired }),
    description: z.string().min(1, { message: messages?.description }),
    link: z.string().min(1, { message: messages?.description }),
})


export type HandbookType = z.infer<typeof handbookSchema>