import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateContactDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the contact' })
  @IsNotEmpty()
  @IsString()
  name!: string

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the contact' })
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @ApiProperty({ example: '+1234567890', description: 'The phone number of the contact' })
  @IsNotEmpty()
  @IsString()
  phone!: string

  @ApiProperty({ example: 123, description: 'The ID of the customer associated with the contact' })
  @IsNotEmpty()
  @IsNumber()
  customer_id!: number
}
