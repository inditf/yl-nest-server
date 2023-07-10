import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express/interfaces';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();//允许跨域
  app.useStaticAssets(join(__dirname, '..', 'static'), {
    prefix: '/static',
  });//静态资源目录

  await app.listen(4000);
}
bootstrap();
