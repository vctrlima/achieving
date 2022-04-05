import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { SignInRequest } from "../interface/SignInRequest";
import { SignUpRequest } from "../interface/SignUpRequest";
import { UserRepository } from "../repository/UserRepository";

export class UserService {
    private userRepository = UserRepository;

    public async signUp({ username, email, password }: SignUpRequest) {
        if (!username)
            throw new Error("Username incorrect");

        if (!email)
            throw new Error("Email incorrect");

        if (!password)
            throw new Error("Password invalid");

        const userAlreadyExists = await this.userRepository.findOne({ where: { email } || { username } });
        if (userAlreadyExists)
            throw new Error("User already exists");

        const hashedPassword = await hash(password, 8);
        const user = await this.userRepository.save({ username, email, password: hashedPassword });

        return user;
    }

    public async signIn({ usernameOrEmail, password }: SignInRequest) {
        const user = await this.userRepository.findOne({ where: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });
        if (!user)
            throw new Error("Incorrect username/email!");

        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch)
            throw new Error("Incorrect password!");

        const token = sign({ userId: user.id }, "AD39806740E1EF00AFF9B22D7379DF9C", { expiresIn: "1h" })

        return token;
    }
}
