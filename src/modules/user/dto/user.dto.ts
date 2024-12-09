
import { ApiProperty } from '@nestjs/swagger';
import { ValidationOptions, ValidationError } from 'class-validator';
import { IsPositive, IsString, IsBoolean, IsEmail } from "class-validator";

export class UserDto {
  @ApiProperty()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  lastName: string;


  @ApiProperty({ default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty()
  @IsEmail()
  email: string;





}
