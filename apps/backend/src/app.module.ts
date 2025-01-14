import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'


import { DatabaseModule } from './database/database.module'
import { LoggerModule } from 'nestjs-pino'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    LoggerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          pinoHttp: {
            level: config.get('NODE_ENV') === 'development' ? 'debug' : 'error',
            transport: {
              target: 'pino-pretty',
              options: {
                colorize: true,
                translateTime: 'SYS:standard',
                ignore: 'pid,hostname',
              },
            },
          },
        }
      },
    }),

    DatabaseModule,

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
