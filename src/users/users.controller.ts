import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { Users } from 'typeorm/entities/users'
import { UpdateUserDto } from './dto/update-user.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto)
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return this.usersService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id)
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id)
  }
}
