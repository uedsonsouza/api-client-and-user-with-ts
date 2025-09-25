import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  UpdateDateColumn,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import bcrypt from 'bcrypt'
import { Files } from './files'
@Entity({ name: 'users' })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ type: 'varchar', length: 100 })
  name!: string

  @Column({ type: 'varchar', length: 100, unique: true })
  email!: string

  @Column({ type: 'varchar', length: 15, unique: true })
  phone!: string

  password!: string

  @Column({ type: 'varchar', length: 100 })
  password_hash!: string

  @CreateDateColumn()
  created_at!: Date

  @UpdateDateColumn()
  updated_at!: Date

  @ManyToOne(() => Files, file => file.users)
  @JoinColumn({ name: 'file_id' })
  file!: Files

  @Column({ nullable: true })
  file_id!: number

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    if (this.password) {
      this.password_hash = await bcrypt.hash(this.password, 8)
    }
  }
  async checkPassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password_hash)
  }
}
