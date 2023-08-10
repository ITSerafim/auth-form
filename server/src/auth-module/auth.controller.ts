import { NextFunction, Request, Response } from 'express';
import { ResponseWithData } from '../../core/responses';
import AuthService from './services/auth.service';

class AuthController {
  private readonly service: AuthService;

  constructor() {
    this.service = new AuthService();
    this.signOn = this.signOn.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  public async signOn(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const result = await this.service.registration(request.body);

      return response.json(result);
    } catch (error) {
      next(error);
    }
  }

  public async signIn(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | undefined> {
    try {
      const result = await this.service.login(request.body);

      return response.json(result);
    } catch (error) {
      next(error);
    }
  }
}

export default new AuthController();
