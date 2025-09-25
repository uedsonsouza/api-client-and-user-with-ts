import { Module } from '@nestjs/common'
import { UsersModule } from './users/users.module'
import { SessionsModule } from './sessions/sessions.module'
import { FilesModule } from './files/files.module'
import { ContactsModule } from './contacts/contacts.module'
import { CustomersModule } from './customers/customers.module'

@Module({
  imports: [UsersModule, SessionsModule, FilesModule, ContactsModule, CustomersModule],
})
export class AppModule {}
