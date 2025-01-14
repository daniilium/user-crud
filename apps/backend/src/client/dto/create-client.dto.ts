import { IsString, Length } from 'class-validator'

export class CreateClientDto {
  @IsString()
  @Length(3, 50)
  name: string

  @IsString()
  @Length(3, 50)
  company: string

  @IsString()
  @Length(3, 100)
  contactInfo: string
}
