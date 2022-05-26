import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repository/UserRepository";
import { UserService } from "../services/UserService";

export class UserController {

  private userService: UserService;
  private userRepository = UserRepository;

  constructor() {
    this.userService = new UserService();
  }

  async get(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.find();
  }

  async getById(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne({ where: { id: request.params.id } });
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let userToRemove = await this.userRepository.findOneBy({ id: request.params.id });

    await this.userRepository.remove(userToRemove);
  }

  async signUp(request: Request, response: Response, next: NextFunction) {
    return this.userService.signUp({
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
    });
  }

  async signIn(request: Request, response: Response, next: NextFunction) {
    return this.userService.signIn({
      usernameOrEmail: request.body.usernameOrEmail,
      password: request.body.password,
    });
  }
}
