import { Expose } from 'class-transformer/types/decorators/expose.decorator';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @Expose()
  @IsString()
  name: string;
}
