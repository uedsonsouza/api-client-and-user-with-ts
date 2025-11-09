import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
export class CreateUserDto {
  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  @IsNotEmpty()
  @IsString()
  name!: string

  @ApiProperty({ example: 'john.doe@example.com', description: 'The email of the user' })
  @IsNotEmpty()
  @IsEmail()
  email!: string

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  @MinLength(6, { message: 'Password must be at least 6 characters long' })
  password!: string

  @ApiProperty({ example: '+1234567890', description: 'The phone number of the user' })
  @IsNotEmpty()
  @IsString()
  phone!: string

  @ApiProperty({
    example: 123,
    description: 'The file ID associated with the user',
    required: false,
  })
  @IsOptional()
  file_id?: number
}
