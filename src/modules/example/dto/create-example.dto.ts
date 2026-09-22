import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

export const CreateExampleSchema = z.object({
	name: z.string().min(2).max(100),
	description: z.string().optional(),
});

export class CreateExampleDto extends createZodDto(CreateExampleSchema) {}
