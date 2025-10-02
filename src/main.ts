import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const PORT = process.env.PORT || 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT)
  console.log(`🚀 Server is running on port ${PORT}`)
  console.log(`📚 API Documentation available at: http://localhost:${PORT}/api-docs`)
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`)
}
bootstrap()
