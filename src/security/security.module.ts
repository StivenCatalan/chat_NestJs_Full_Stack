import { Module } from "@nestjs/common";
import { LoginService } from "./auth/services/login-service";
import { UserModule } from "src/user/user.module";
import { LoginController } from "./auth/controllers/login-controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./auth/jwt.constants";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";

@Module({
    imports: [
        UserModule,
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService, JwtStrategy],
    exports: []
})
export class SecurityModule { }