import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Query} from '@nestjs/common';
import{Session, type UserSession} from '@thallesp/nestjs-better-auth';
import{CreateTaskDto} from './dto/create-task.dto.js';
import { UpdateTaskDto } from './dto/update-task.dto.js';
import { ListTaskQueryDto } from './dto/list-task.dto.js';
import { TasksService } from './tasks.service.js';

@Controller('tasks')
export class TasksController{
    constructor(private readonly tasksService: TasksService){}
    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Session() session : UserSession, @Body() dto:CreateTaskDto){
        return this.tasksService.create(session.user.id, dto);
    }
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(@Session() session: UserSession, @Query() query: ListTaskQueryDto){
        return this.tasksService.findAll(session.user.id, query)
    }

    @Get(':id')
    @HttpCode(HttpStatus.OK)
    findOne(@Session() session: UserSession, @Param('id') id: string){
        return this.tasksService.findOne(session.user.id, id)
    }

    @Patch('id')
    @HttpCode(HttpStatus.OK)
    update(@Session() session: UserSession, @Param('id') id: string, @Body() dto:UpdateTaskDto){
        return this.tasksService.update(session.user.id, id, dto)
    }

    @Delete()
    @HttpCode(HttpStatus.OK)
    remove(@Session() session: UserSession, @Param() id: string){
        return this.tasksService.remove(session.user.id, id)
    }
}