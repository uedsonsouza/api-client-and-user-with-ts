import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
// import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Users } from '../../typeorm/entities/users'
import { Repository } from 'typeorm'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const user = this.UsersRepository.create(createUserDto)
    try {
      return await this.UsersRepository.save(user)
    } catch (error) {
      console.error(error)
      throw new Error('Error creating user')
    }
  }

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user'
  // }

  // findAll() {
  //   return `This action returns all users`
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`
  // }
}
