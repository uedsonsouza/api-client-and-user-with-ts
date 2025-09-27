import { PartialType } from '@nestjs/mapped-types'
import { CreateFileDto } from './create-file.dto'
import { IsNotEmpty, IsString } from 'class-validator'

export class UpdateFileDto extends PartialType(CreateFileDto) {
  @IsNotEmpty()
  @IsString()
  name?: string

  @IsNotEmpty()
  @IsString()
  path?: string
}
