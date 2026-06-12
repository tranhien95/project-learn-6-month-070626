import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Hien',
      username: 'hien123',
      password: 'password123',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User ${id} not found`);
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
      id: this.users.length + 1,
      name: createUserDto.name,
      username: createUserDto.username,
      password: createUserDto.password,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);
    if (user) {
      user.name = updateUserDto.name || '';
      user.username = updateUserDto.username || '';
      user.password = updateUserDto.password || '';
      return user;
    }
    return null;
  }

  remove(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1);
      return removedUser[0];
    }
    return null;
  }

  findByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
