import { Injectable } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Users } from '../../typeorm/entities/users'
import { Repository } from 'typeorm'
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<Users> {
    const { password, ...userData } = createUserDto
    const hashedPassword = await bcrypt.hash(password, 6)
    console.log('hashedPassword--->', hashedPassword)
    const user = this.UsersRepository.create({ ...userData, password_hash: hashedPassword })
    console.log(user)
    console.log('------>', user.password_hash)

    try {
      return await this.UsersRepository.save(user)
    } catch (error) {
      console.error(error)
      throw new Error('Error creating user')
    }
  }

  async findAll() {
    return this.UsersRepository.find()
  }

  async findOne(id: number) {
    return this.UsersRepository.findOneBy({ id })
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password, ...userData } = updateUserDto
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 6)
      userData['password_hash'] = hashedPassword
    }
    return this.UsersRepository.update(id, userData)
  }

  async remove(id: number) {
    return this.UsersRepository.delete(id)
  }
}
