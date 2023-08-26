import { z } from "zod";

export const Skill = z.object({
  name: z.string(),
  duration: z.string(),
});

export const Project = z.object({
  name: z.string(),
  description: z.string(),
  company: z.string(),
  skills: z.array(Skill),
  link: z.string().url(),
});

export const Experience = z.object({
  name: z.string(),
  position: z.string(),
  skills: z.array(Skill),
  company: z.string(),
  duration: z.string(),
  projects: z.array(Project),
});

type Experience = z.infer<typeof Experience>;
type Project = z.infer<typeof Project>;
type Skill = z.infer<typeof Skill>;
