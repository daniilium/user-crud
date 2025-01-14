import { MigrationInterface, QueryRunner } from 'typeorm'
import { ru, Faker, faker } from '@faker-js/faker'
// config env
import 'dotenv/config'

const customFaker = new Faker({
  locale: [ru],
})

export class InsertFakeClients1736850500586 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (process.env.NODE_ENV !== 'development') {
      return console.log('>>> skip migration InsertFakeClients1736850500586')
    }

    const clients = []
    for (let i = 0; i < 100; i++) {
      clients.push({
        id: customFaker.string.uuid(),
        name: customFaker.person.fullName(),
        company: customFaker.company.name(),
        contactInfo: `
          ${faker.person.jobTitle()},
          ${faker.person.bio()},
          ${customFaker.phone.number({ style: 'human' })}
        `,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }
    await queryRunner.manager
      .createQueryBuilder()
      .insert()
      .into('client')
      .values(clients)
      .execute()
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .createQueryBuilder()
      .delete()
      .from('client')
      .execute()
  }
}
