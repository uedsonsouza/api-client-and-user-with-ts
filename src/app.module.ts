import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { ScheduleModule } from '@nestjs/schedule'
import { ConfigModule } from '@nestjs/config'
import { SessionsModule } from './sessions/sessions.module'
import { FilesModule } from './files/files.module'
import { ContactsModule } from './contacts/contacts.module'
import { CustomersModule } from './customers/customers.module'
import { TypeOrmModule } from '@nestjs/typeorm'
const dataSource = require('../typeorm/data-source')

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
    TypeOrmModule.forRoot(dataSource.options),
  ],
})
export class AppModule {}
