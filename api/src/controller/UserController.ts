import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";

export class UserController {

    private userRepository = UserRepository;

    async get(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find();
    }

    async getById(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOne({ where: { id: request.params.id } });
    }

    async insert(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.userRepository.findOneBy({ id: request.params.id });
        await this.userRepository.remove(userToRemove);
    }

}
