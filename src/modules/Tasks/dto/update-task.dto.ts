import {z}from 'zod';
import{createZodDto}from 'nestjs-zod';
import{createTaskSchema, prioritySchema}from './create-task.dto.js';

export class UpdateTaskDto extends createZodDto(
    createTaskSchema.partial()
){}