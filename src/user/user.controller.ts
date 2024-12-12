import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { User } from "./user.model";
import { UserService } from "./user.service";
import { ApiBody } from "@nestjs/swagger";
import { UserCredentials } from "./login.model";

@Controller("/api/user")
export class UserController{
    constructor(private readonly service: UserService) {}

    @Get("/find-all")
    async getAllUsers(){
        return this.service.getAll();
    }

    @Get("/find-by-id")
    async getUserById(@Param("user") id: number){
        return this.service.getUserById(id);
    }

    @Post("/login")
    async login(@Body() credentials: UserCredentials){
        return this.service.login(credentials.email, credentials.password);
    }

    @Post("/register")
    @ApiBody({type: User})
    async createUser(@Body() data: User){
        return this.service.createUser(data);
    }

    @Put("/update")
    @ApiBody({type: User})
    async updateUser(@Param("id") id: number, @Body() data: User){
        return this.service.update(id, data);
    }

    @Delete("/delete")
    async deleteUser(@Param("id") id: number){
        return this.service.delete(id);
    }
}