import { PartialType } from '@nestjs/mapped-types'
import { CreateCustomerDto } from './create-customer.dto'
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'
import { CustomersStatus } from 'typeorm/entities/customers'

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
  @IsEnum(CustomersStatus)
  status?: CustomersStatus
}
