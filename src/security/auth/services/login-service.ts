import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { FindUserByEmailEvent } from "src/common/events/events.constants";
import { LoginI } from "../interfaces/auth.interface";
import { EventEmitter2 } from '@nestjs/event-emitter';
import { LoginDto } from "../dto/login.dto";
import { JwtService } from "@nestjs/jwt";
@Injectable()
export class LoginService {
    constructor(
        private jwtService: JwtService,
        private readonly eventEmitter: EventEmitter2,
    ) { }

    async loginValidator(input: LoginDto): Promise<LoginI> {
        const [user] = await this.eventEmitter.emitAsync(FindUserByEmailEvent, input.email)
        if (!user) throw new NotFoundException('User Not found');
        if (input.password !== user.password) throw new UnauthorizedException('Incorrect password');


        const payload = { sub: user.id, email: user.email };
        const token = await this.jwtService.signAsync(payload);

        return {
            message: 'Login successful',
            token: token,
            user
        }
    };
}