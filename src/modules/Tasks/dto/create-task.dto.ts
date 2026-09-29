import{z}from'zod';
import{createZodDto}from'nestjs-zod';

export const prioritySchema = z.enum(["low", "medium", "high"]);

export const createTaskSchema = z.object({
    title: z.string().trim().min(1),
    description: z.string().trim().optional(),
    priority: prioritySchema
});

export class CreateTaskDto extends createZodDto(createTaskSchema){}