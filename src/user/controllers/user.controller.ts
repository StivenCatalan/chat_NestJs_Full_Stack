import { Body, Controller, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { UpdateUserDto } from "../dto/update-user.dto";
import { CreateUserDto } from "../dto/create-user.dto";
import { ApiBearerAuth } from "@nestjs/swagger";  
import { AuthGuard } from "@nestjs/passport";

@UseGuards(AuthGuard('jwt'))
@ApiBearerAuth('access-token')
@Controller('user')
export class UserController {
    constructor(
        private userService: UserService) { }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get('/:id')
    async findOne(
        @Param('id') id: number) {
        return await this.userService.findOne(id);
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