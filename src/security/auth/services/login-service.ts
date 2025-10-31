import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { LoginDto } from "../dto/login.dto";
import { UserService } from "src/user/services/user.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()

export class LoginService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,

    ) { }

    async loginValidator(input: LoginDto) {

        const user = await this.userService.findByEmail(input.email);
        if (!user) throw new HttpException('User no found', HttpStatus.NOT_FOUND);
        if (input.password !== user.password) throw new HttpException('Incorrect password', HttpStatus.NOT_FOUND);


        const payload = { sub: user.id, email: user.email };
        const token = await this.jwtService.signAsync(payload);

        return {
            message: 'Login successful',
            access_token: token,
            userId: user.id,
            email: user.email,
        }
    };
}