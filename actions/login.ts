"use server";

import { action } from "@/lib/safe-action";
import { z } from "zod";

const schema = z.string().min(1, { message: "Please enter your name" });

export const statelessFormAction = action
    .metadata({ actionName: "statelessFormAction" })
    .schema(schema)
    .action(async ({ parsedInput }) => {
        await new Promise((res) => setTimeout(res, 1000));

        return {
            newName: parsedInput,
        };
    });