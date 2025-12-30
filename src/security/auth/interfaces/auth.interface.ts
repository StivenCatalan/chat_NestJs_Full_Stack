import { User } from "src/user/entities/user.entity";

export interface LoginI {
    token: string,
    user: User,
    message: string
}