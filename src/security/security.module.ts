import { Module } from "@nestjs/common";
import { LoginService } from "./auth/services/login-service";
import { UserModule } from "src/user/user.module";
import { LoginController } from "./auth/controllers/login-controller";

@Module({
    imports: [UserModule],
    controllers: [LoginController],
    providers: [LoginService],
    exports: []
})
export class SecurityModule { }