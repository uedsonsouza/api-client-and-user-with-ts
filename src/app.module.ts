import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ScheduleModule } from '@nestjs/schedule'
import { ConfigModule } from '@nestjs/config'
import { SessionsModule } from './sessions/sessions.module'
import { FilesModule } from './files/files.module'
import { ContactsModule } from './contacts/contacts.module'
import { CustomersModule } from './customers/customers.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Users } from 'typeorm/entities/users'
import { Files } from 'typeorm/entities/files'
import { Contacts } from 'typeorm/entities/contacts'
import { Customers } from 'typeorm/entities/customers'

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    SessionsModule,
    FilesModule,
    ContactsModule,
    CustomersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.PG_HOST || 'localhost',
      port: parseInt(process.env.PG_PORT, 10) || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Users, Files, Contacts, Customers],
      synchronize: false,
      migrations: ['dist/typeorm/migrations/*.js'],
      logging: true,
    }),
  ],
})
export class AppModule {}
