import { Responses } from '../../../core';
import { ResponseService } from '../../../core/services/response.service';
import { UserSchema } from '../../../database/schemas/user.schema';
import { UserService } from '../../user-module';
import HashService from './hash.service';
import TokenService from './token.service';

class AuthService extends ResponseService<{ token: string }> {
  private readonly service: UserService;

  constructor() {
    super();
    this.service = new UserService();
  }

  public async registration(
    payload: UserSchema
  ): Promise<Responses.ResponseWithData<{ token: string }>> {
    const { email, name, password } = payload;

    const candidate = await this.service.getUserByEmail(email);

    if (!candidate) this.error('User already exist');

    const hashedPassword = await HashService.hash(password);

    await this.service.addUser({ name, email, password: hashedPassword });

    const token = TokenService.token({ email, name });

    return this.resData({ token });
  }

  public async login(): Promise<any> {}
}

export default AuthService;
