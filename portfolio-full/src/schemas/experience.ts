import { z } from "zod";

const Skill = z.object({
  name: z.string(),
  duration: z.string(),
});

const Project = z.object({
  name: z.string(),
  description: z.string(),
  company: z.string(),
  skills: z.array(Skill),
  link: z.string().url(),
});

const Experience = z.object({
  name: z.string(),
  description: z.string(),
  position: z.string(),
  skills: z.array(Skill),
  company: z.string(),
  duration: z.string(),
  projects: z.array(Project),
});

export type Experience = z.infer<typeof Experience>;
export type Project = z.infer<typeof Project>;
export type Skill = z.infer<typeof Skill>;
