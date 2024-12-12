import { PrismaService } from "src/prisma/prisma.service";
import { User } from "./user.model";
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) { }

    async getAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async getUserById(id: number): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { id } });
    }

    async createUser(data: User): Promise<User> {
        return await this.prisma.user.create({ data });
    }

    async update(id: number, data: User): Promise<User> {
        return await this.prisma.user.update({ where: { id }, data });
    }

    async delete(id: number): Promise<User> {
        return await this.prisma.user.delete({ where: { id } });
    }

    async login(email: string, senha: string): Promise<User> {
        const user = await this.prisma.user.findUnique({
            where: { email }
        });

        if (user) {
            if (user.password === senha) {
                return user;
            } else {
                throw new BadRequestException("Senha inválida");
            }
        } else {
            throw new NotFoundException("Usuário não encontrado");
        }
    }
}