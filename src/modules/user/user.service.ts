
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = await this.usersRepository.create({
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      email: createUserDto.email,
    });
    let savedUser
    try {

      savedUser = await this.usersRepository.save(createdUser)
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        throw new HttpException('Thie email is already in use', HttpStatus.CONFLICT)
      }
    }
    return savedUser;
  }
}
