import {z} from 'zod';
import{createZodDto}from 'nestjs-zod';
import{prioritySchema}from './create-task.dto.js';

export class ListTaskQueryDto extends createZodDto(
    z.object({
        completed:z.enum(['true','false'])
            .transform((v) => v === 'true')
            .optional(),
        priority: prioritySchema.optional(),
    })
){}