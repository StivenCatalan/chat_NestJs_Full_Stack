import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        const users = await this.userRepository.find();
        return users;
    }

    async findOne(id: number): Promise<User | null> {
        const user = await this.userRepository.findOne({
            where: {
                id
            }
        });
        return user;
    }
}