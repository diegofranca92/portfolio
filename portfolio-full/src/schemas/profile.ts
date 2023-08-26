import { z } from 'zod';

const Profile = z.object({
  name: z.string().optional(),
  role: z.string().optional(),
  bio: z.string().optional(),
  formation: z.string().optional(),
});

export type Profile = z.infer<typeof Profile>;