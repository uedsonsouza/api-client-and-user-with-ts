import { Injectable } from '@nestjs/common'
import { CreateContactDto } from './dto/create-contact.dto'
import { UpdateContactDto } from './dto/update-contact.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Contacts } from 'typeorm/entities/contacts'

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contacts)
    private readonly contactsRepository: Repository<Contacts>,
  ) {}

  async createContact(createContactDto: CreateContactDto): Promise<Contacts> {
    const contact = this.contactsRepository.create(createContactDto)
    try {
      return await this.contactsRepository.save(contact)
    } catch (error) {
      console.error(error)
      throw new Error('Error creating Contact')
    }
  }

  // findAll() {
  //   return `This action returns all contacts`
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} contact`
  // }

  // update(id: number, updateContactDto: UpdateContactDto) {
  //   return `This action updates a #${id} contact`
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} contact`
  // }
}
