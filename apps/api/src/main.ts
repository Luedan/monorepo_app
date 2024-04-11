import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const config = new DocumentBuilder()
    .setTitle('360 API')
    .setDescription('The 360 API description')
    .setVersion('1.0')
    .addTag('360 BACKEND')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs', app, document);

  app.setGlobalPrefix('/api');

  await app.listen(3001);

  Logger.log(`Server running on http://localhost:3001/docs`, 'Bootstrap');
}
bootstrap();
