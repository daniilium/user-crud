import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { Exclude } from 'class-transformer'

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  company: string

  @Column()
  contactInfo: string

  @CreateDateColumn({ select: false })
  @Exclude()
  createdAt: Date

  @UpdateDateColumn({ select: false })
  @Exclude()
  updatedAt: Date
}
