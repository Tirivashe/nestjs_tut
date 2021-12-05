import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class CreateUserDTO{
  @IsString()
  @IsNotEmpty()
  firstName: string

  @IsString()
  @IsNotEmpty()
  lastName: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @IsNotEmpty()
  password: string

  @IsNumber()
  @IsNotEmpty()
  age: number

  @IsBoolean()
  @IsNotEmpty()
  married: boolean

  @IsString()
  @IsNotEmpty()
  race: string

  @IsString()
  @IsNotEmpty()
  gender: string
}


export class UpdateUserDTO{
  @IsString()
  @IsOptional()
  firstName?: string

  @IsString()
  @IsOptional()
  lastName?: string

  @IsString()
  @IsOptional()
  email?: string

  @IsString()
  @IsOptional()
  password?: string

  @IsNumber()
  @IsOptional()
  age?: number

  @IsBoolean()
  @IsOptional()
  married?: boolean

  @IsString()
  @IsOptional()
  race?: string

  @IsString()
  @IsOptional()
  gender?: string
}
