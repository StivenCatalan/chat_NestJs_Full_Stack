import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Get()
    async findAll() {
        const users = await this.userService.findAll();
        return users;
    }
    
    @Get('/:id')
    async findOne(
        @Param('id') id: number
    ) {
        const user = await this.userService.findOne(id);
        return user;
    }

    @Post()
    async create(
        @Body() input: CreateUserDto
    ) {
        return await this.userService.create(input);
    }

    @Put()
    async update(
        @Body() input: UpdateUserDto
    ) {
        return await this.userService.update(input);
    }

}