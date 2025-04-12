import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('/api')

  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: ['http://localhost:3000', 'http://localhost:8080'],
  })

  const config = new DocumentBuilder()
    .setTitle('Fasthip')
    .setDescription('The fastship API description')
    .setVersion('1.0')
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, documentFactory)

  app.enableShutdownHooks()

  await app.listen(process.env.PORT ?? 3333)
}

bootstrap()
