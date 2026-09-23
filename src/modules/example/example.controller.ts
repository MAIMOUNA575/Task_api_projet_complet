import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import type { CreateExampleDto } from './dto/create-example.dto.js';
import type { UpdateExampleDto } from './dto/update-example.dto.js';
import type { ExampleService } from './example.service.js';

@ApiTags('example')
@Controller('examples')
export class ExampleController {
	constructor(private readonly service: ExampleService) {}

	@Get()
	findAll() {
		return this.service.findAll();
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return this.service.findOne(+id);
	}

	@Post()
	create(@Body() dto: CreateExampleDto) {
		return this.service.create(dto);
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() dto: UpdateExampleDto) {
		return this.service.update(+id, dto);
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return this.service.remove(+id);
	}
}
