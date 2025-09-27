import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  name!: string

  @IsNotEmpty()
  @IsEmail()
  email!: string

  @IsNotEmpty()
  @IsString()
  phone!: string

  @IsNotEmpty()
  @IsNumber()
  customer_id!: number
}
