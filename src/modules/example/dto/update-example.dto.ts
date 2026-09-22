import { createZodDto } from 'nestjs-zod';
import { CreateExampleSchema } from './create-example.dto.js';

export const UpdateExampleSchema = CreateExampleSchema.partial();

export class UpdateExampleDto extends createZodDto(UpdateExampleSchema) {}
