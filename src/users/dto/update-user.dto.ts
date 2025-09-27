import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty()
  @IsString()
  name?: string

  @IsNotEmpty()
  @IsEmail()
  email?: string

  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password?: string

  @IsNotEmpty()
  @IsString()
  phone?: string

  @IsOptional()
  file_id?: number
}
