import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const configService = app.get(ConfigService)

  const isDev = configService.get<string>('NODE_ENV') === 'development'
  const isProd = configService.get<string>('NODE_ENV') === 'production'

  if (isDev) {
    app.enableCors({
      origin: ['https://127.0.0.1:80', 'https://dev.daniilium.ru'],
      methods: 'GET,POST,PUT,DELETE,PATCH',
    })
  }

  if (isProd) {
    app.enableCors({
      origin: ['https://webapp-bot-test.vercel.app'],
      methods: 'GET,POST,PUT,DELETE,PATCH',
    })
  }

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(process.env.PORT || 3000)
}

bootstrap()
