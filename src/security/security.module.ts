import { Module } from "@nestjs/common";
import { LoginService } from "./auth/services/login-service";
import { UserModule } from "src/user/user.module";
import { LoginController } from "./auth/controllers/login-controller";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";
import { ConfigService } from "@nestjs/config";

@Module({
    imports: [
        UserModule,
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('SECRET'),
                signOptions: { expiresIn: '1h' }
            }),
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService, JwtStrategy],
    exports: []
})
export class SecurityModule { }