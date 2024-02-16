import { IsEmail, IsInt, IsString, IsStrongPassword } from "class-validator";

export class UserReq {
    @IsInt()
    name: string

    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string
}

export class UserLogin {
    @IsEmail()
    email: string

    @IsString()
    password: string
}

export class User {
    id: number
    name: string
    email: string
    password: string
}