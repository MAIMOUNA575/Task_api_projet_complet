import {
	type CallHandler,
	type ExecutionContext,
	Injectable,
	type NestInterceptor,
} from '@nestjs/common';
import { type Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
		const req = context.switchToHttp().getRequest();
		const start = Date.now();

		return next.handle().pipe(
			tap(() => {
				const duration = Date.now() - start;
				console.log(`${req.method} ${req.url} - ${duration}ms`);
			}),
		);
	}
}
