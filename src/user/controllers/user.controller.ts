import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { AuthGuard } from "@nestjs/passport";
import { ApiBearerAuth } from "@nestjs/swagger";

@Controller('user')
export class UserController {
    constructor(
        private userService: UserService) { }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth('access-token')
    @Get()
    async findAll() {
        const users = await this.userService.findAll();
        return users;
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: number) {
        const user = await this.userService.findOne(id);
        return user;
    }

    @Post()
    async create(
        @Body() input: CreateUserDto) {
        return await this.userService.create(input);
    }

    @Put()
    async update(
        @Body() input: UpdateUserDto) {
        return await this.userService.update(input);
    }

}