import { TokenResponse, ErrorResponse } from '../../../core/responses';
import { ResponseService } from '../../../core/services/response.service';
import { UserSchema } from '../../../database/schemas/user.schema';
import { UserService } from '../../user-module';
import HashService from './hash.service';
import TokenService from './token.service';

class AuthService extends ResponseService<string> {
  private readonly service: UserService;

  constructor() {
    super();
    this.service = new UserService();
  }

  public async registration(
    payload: UserSchema
  ): Promise<TokenResponse | ErrorResponse> {
    const { email, name, password } = payload;

    const candidate = await this.service.getUserByEmail(email);

    if (candidate) return this.error('Пользователь уже существует', 400);

    const hashedPassword = await HashService.hash(password);

    await this.service.addUser({ name, email, password: hashedPassword });

    const token = TokenService.token({ email });

    return this.resData(token);
  }

  public async login(
    payload: UserSchema
  ): Promise<TokenResponse | ErrorResponse> {
    const { email, password } = payload;

    const user = await this.service.getUserByEmail(email);

    if (!user)
      return this.error('Пользователь с таким email не существует', 404);

    const passwordEquals = await HashService.verify(password, user.password);

    if (!passwordEquals) return this.error('Невернный пароль', 404);

    const token = TokenService.token({ email, name: user.name });

    return this.resData(token);
  }
}

export default AuthService;
