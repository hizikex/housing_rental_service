import { AppDataSource } from "../datasource/data-source";
import { User } from "../../entity/User";
import { RegisterUserParams, UserRegistrationResponse } from "../interfaces/user";
import bcrypt from 'bcrypt';
import { logger } from "../utils/logger";

export const registerUser = async (userId: number, data: RegisterUserParams): Promise<UserRegistrationResponse> => {
    const user = await AppDataSource.getRepository(User).findOneBy({ id: userId });
    if (user) {
        throw new Error('User with email already exist')
    }

    const saltPassword = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(data.password, saltPassword);

    const newUser = await AppDataSource.getRepository(User).create({
        username: data.username,
        email: data.email,
        password: hashedPassword
    });
    
    logger.info(`User ${newUser.email} created`);

    return { message: 'User registration successful', user: newUser };
}
