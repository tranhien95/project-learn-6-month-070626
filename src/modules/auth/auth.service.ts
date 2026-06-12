import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = this.usersService.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid username or password');
    }

    const payload = {
      sub: user.id,
      username: user.username,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
