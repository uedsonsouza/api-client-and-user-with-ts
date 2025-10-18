import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'
import { CustomersStatus } from 'typeorm/entities/customers'
export class CreateCustomerDto {
  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsPhoneNumber(null)
  phone!: string

  @IsOptional()
  @IsEnum(CustomersStatus)
  status?: CustomersStatus
}
