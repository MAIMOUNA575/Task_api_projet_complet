import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { Logger } from 'nestjs-pino';
import { ZodValidationPipe } from 'nestjs-zod';
import { AppModule } from './app.module.js';

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { bufferLogs: true });
	app.useLogger(app.get(Logger));
	app.use(helmet());
	app.useGlobalPipes(new ZodValidationPipe());

	const config = new DocumentBuilder()
		.setTitle('NexaFood API')
		.setVersion('0.1.0')
		.addBearerAuth()
		.build();
	SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, config));

	await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
