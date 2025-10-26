import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { LoginDto } from "../dto/login.dto";
import { UserService } from "src/user/services/user.service";

@Injectable()

export class LoginService {
    constructor(private userService: UserService) { }

    async loginValidator(input: LoginDto) {

        const user = await this.userService.findByEmail(input.email);
        if (!user) throw new HttpException('User no found', HttpStatus.NOT_FOUND);
        if (input.password !== user.password) throw new HttpException('Incorrect password', HttpStatus.NOT_FOUND);

        return { mensaje: 'Login successful', userId: user.id, email: user.email };
    }
}