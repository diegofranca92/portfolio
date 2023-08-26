import { z } from 'zod';

export const Profile = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  formation: z.string(),
});

type Profile = z.infer<typeof Profile>;