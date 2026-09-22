import { z } from 'zod';

export const envSchema = z.object({
	NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
	PORT: z.coerce.number().default(3000),
	DATABASE_URL: z.string().url(),
	BETTER_AUTH_SECRET: z.string().min(16),
	BETTER_AUTH_URL: z.string().url(),
});

export type Env = z.infer<typeof envSchema>;
