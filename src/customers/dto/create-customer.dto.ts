import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'
import { CustomersStatus } from 'typeorm/entities/customers'
import { ApiProperty } from '@nestjs/swagger'
export class CreateCustomerDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the customer' })
  @IsNotEmpty()
  @IsString()
  name!: string

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the customer' })
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @ApiProperty({ example: '+1234567890', description: 'The phone number of the customer' })
  @IsNotEmpty()
  @IsPhoneNumber(null)
  phone!: string

  @ApiProperty({ example: 'active', description: 'The status of the customer', required: false })
  @IsOptional()
  @IsEnum(CustomersStatus)
  status?: CustomersStatus
}
