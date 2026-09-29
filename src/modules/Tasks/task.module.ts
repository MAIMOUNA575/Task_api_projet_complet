import{Module } from '@nestjs/common'
import { TasksController } from './taks.controller.js'
import { TasksService } from './tasks.service.js'

@Module({
    controllers:[TasksController],
    providers:[TasksService]
})
export class TaskModule{}