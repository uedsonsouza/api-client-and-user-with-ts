import { IsNotEmpty, IsString } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
export class CreateFileDto {
  @ApiProperty({ example: 'example.png', description: 'The name of the file' })
  @IsNotEmpty()
  @IsString()
  name!: string

  @ApiProperty({ example: '/uploads/example.png', description: 'The path of the file' })
  @IsNotEmpty()
  @IsString()
  path!: string
}
