"use server"

import { prisma } from "@/db/db"
import { HandbookType } from "@/types"

export const UpdateHandbook = async ({ handbook }: { handbook: HandbookType }): Promise<HandbookType | string | null> => {
    try {
        const data = await prisma.handbook.update({
            where: { id: handbook?.id },
            data: handbook
        })
        return data

    } catch (error) {
        return null
    }
}


