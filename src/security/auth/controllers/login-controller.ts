import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { LoginService } from "../services/login-service";
import { LoginDto } from "../dto/login.dto";

@Controller('auth')
export class LoginController {
    constructor(private loginService: LoginService) { }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() input: LoginDto) {
        return this.loginService.loginValidator(input);
    }
}