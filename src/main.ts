import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  let puerto = process.env.PORT || 443;
  await app.listen(puerto);
  //await app.listen(3000);
}
bootstrap();
