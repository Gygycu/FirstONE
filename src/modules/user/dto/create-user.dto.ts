
import { ApiProperty } from '@nestjs/swagger';
import { ValidationOptions, ValidationError } from 'class-validator';
import { IsString, IsEmail } from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty()
    @IsString()
    lastName: string;

    @ApiProperty()
    @IsEmail()
    email: string;
}


