import { User } from "../../entity/User";

export interface RegisterUserParams {
    username: string;
    email: string;
    password: string;
}

export interface UserRegistrationResponse {
    message: string;
    user: User
}
