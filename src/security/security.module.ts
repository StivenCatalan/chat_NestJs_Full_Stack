import { LoginController } from "./auth/controllers/login-controller";
import { LoginService } from "./auth/services/login-service";
import { JwtStrategy } from "./auth/strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                secret: config.get<string>('SECRET'),
                signOptions: { expiresIn: '24h' }
            }),
        }),
    ],
    controllers: [LoginController],
    providers: [LoginService, JwtStrategy],
    exports: []
})
export class SecurityModule { }