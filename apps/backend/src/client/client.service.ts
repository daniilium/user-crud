import { Injectable } from '@nestjs/common'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from './entities/client.entity'
import { Repository } from 'typeorm'

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>
  ) {}

  create(createClientDto: CreateClientDto) {
    return 'This action adds a new client'
  }

  findAll() {
    return this.clientRepository.find()
  }

  findOne(id: string) {
    return this.clientRepository.findOneBy({ id }).then((client) => {
      if (!client) {
        throw new Error('Client not found')
      }
      return client
    })
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`
  }

  remove(id: string) {
    return this.clientRepository.delete(id).then((result) => {
      if (result.affected === 0) {
        throw new Error('Client not found')
      }
      if (result.affected > 1) {
        throw new Error('Multiple clients deleted')
      }
      return true
    })
  }
}
