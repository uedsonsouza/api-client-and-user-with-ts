import { PartialType } from '@nestjs/mapped-types'
import { CreateContactDto } from './create-contact.dto'
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class UpdateContactDto extends PartialType(CreateContactDto) {
  @IsNotEmpty()
  @IsString()
  name?: string

  @IsNotEmpty()
  @IsEmail()
  email?: string

  @IsNotEmpty()
  @IsString()
  phone?: string

  @IsNotEmpty()
  @IsNumber()
  customer_id?: number
}
