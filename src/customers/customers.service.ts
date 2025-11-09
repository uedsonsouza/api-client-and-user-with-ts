import { Injectable } from '@nestjs/common'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Customers } from 'typeorm/entities/customers'

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customers)
    private readonly customersRepository: Repository<Customers>,
  ) {}

  async createCustomer(createCustomerDto: CreateCustomerDto): Promise<Customers> {
    const customer = this.customersRepository.create(createCustomerDto)

    try {
      return await this.customersRepository.save(customer)
    } catch (error) {
      console.error(error)
      throw new Error('Error creating Customer')
    }
  }

  // findAll() {
  //   return `This action returns all customers`
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} customer`
  // }

  // update(id: number, updateCustomerDto: UpdateCustomerDto) {
  //   return `This action updates a #${id} customer`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} customer`
  // }
}
