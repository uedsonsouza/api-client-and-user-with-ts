import { PartialType } from '@nestjs/mapped-types'
import { CreateCustomerDto } from './create-customer.dto'
import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsNotEmpty()
  @IsString()
  name?: string

  @IsNotEmpty()
  @IsEmail()
  email?: string

  @IsNotEmpty()
  @IsPhoneNumber(null)
  phone?: string

  @IsOptional()
  status?: 'ACTIVE' | 'ARCHIVED'
}
