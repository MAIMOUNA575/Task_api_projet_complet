import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { CreateExampleDto } from './dto/create-example.dto.js';
import type { UpdateExampleDto } from './dto/update-example.dto.js';

@Injectable()
export class ExampleService {
	constructor(private readonly prisma: PrismaService) {}

	findAll() {
		// Remplace par un vrai modèle Prisma une fois le schéma défini
		return [];
	}

	findOne(id: number) {
		const item = null; // this.prisma.example.findUnique({ where: { id } });
		if (!item) throw new NotFoundException(`Item ${id} not found`);
		return item;
	}

	create(dto: CreateExampleDto) {
		return dto; // this.prisma.example.create({ data: dto });
	}

	update(id: number, dto: UpdateExampleDto) {
		return { id, ...dto }; // this.prisma.example.update({ where: { id }, data: dto });
	}

	remove(id: number) {
		return { id }; // this.prisma.example.delete({ where: { id } });
	}
}