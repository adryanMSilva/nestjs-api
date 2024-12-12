import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";

export class User implements Prisma.UserCreateInput{
    id: number;

    @ApiProperty({description: "Nome do usuário"})
    name: string;

    @ApiProperty({description: "Email do usuário"})
    email: string;

    @ApiProperty({description: "Senha do usuário"})
    password: string;

    @ApiProperty({description: "Tipo do usuário"})
    role: string;

    @ApiProperty({description: "Bio do usuário"})
    bio?: string;
    createdAt?: Date;
    updatedAt?: Date;
}