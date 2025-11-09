import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'

const PORT = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.useGlobalPipes()
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })

  const configService = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API Documentation')
    .setVersion('1.0')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' }, 'bearer')
    .build()
  const documentService = SwaggerModule.createDocument(app, configService)
  SwaggerModule.setup('api-docs', app, documentService)

  await app.listen(PORT)
  console.log(`🚀 Server is running on port ${PORT}`)
  console.log(`📚 API Documentation available at: http://localhost:${PORT}/api-docs`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
}
bootstrap()
