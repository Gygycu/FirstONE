import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('FirstOne RESTapi')
    .setDescription('FirstOne ApiDescription')
    .setVersion('1.0')
    .addTag('FirstOne')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory);
  const port = 3000;
  await app.listen(process.env.PORT ?? port);
  console.log("running nodejs backend on port " + port)
}
bootstrap();
