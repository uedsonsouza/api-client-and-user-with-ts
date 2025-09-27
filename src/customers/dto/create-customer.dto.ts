import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString } from 'class-validator'
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
  status?: 'ACTIVE' | 'ARCHIVED'
}
