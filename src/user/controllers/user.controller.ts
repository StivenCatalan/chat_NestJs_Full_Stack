import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "../services/user.service";

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

}