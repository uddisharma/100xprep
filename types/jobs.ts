import { z } from "zod";

export const jobSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  description: z.string(),
  location: z.string(),
  salary: z.string(),
  company: z.string(),
  link: z.string().url(),
  requirements: z.array(z.string()),
  startDate: z.date(),
  endDate: z.date(),
});

export type JobType = z.infer<typeof jobSchema>;
