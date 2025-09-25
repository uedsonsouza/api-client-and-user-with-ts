import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm'
import { Contacts } from './contacts'

export enum CustomersStatus {
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
}
@Entity({ name: 'customers' })
export class Customers extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email!: string

  @Column({ type: 'varchar', length: 15, unique: true })
  phone!: string

  @Column({ type: 'enum', enum: CustomersStatus, default: CustomersStatus.ACTIVE })
  status!: CustomersStatus

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  @OneToMany(() => Contacts, contact => contact.customer)
  contacts!: Contacts[]

  @BeforeInsert()
  setDefaultStatus() {
    if (!this.status) {
      this.status = CustomersStatus.ACTIVE
    }
  }
}
