import { z } from 'zod';

export const loginRequestDto = z
  .object({
    s: z.string(),
  })
  .required();

export type LoginDto = z.infer<typeof loginRequestDto>;
