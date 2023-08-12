import { UserRequest } from '../contracts/requests/user.request';
import { AuthResponse } from '../contracts/responses/auth.response';
import { HttpService } from '../core/http/http.service';
import env from '../env';



export class AuthService extends HttpService<UserRequest> {

  public async login(payload: UserRequest): Promise<AuthResponse> {
    const result = await this.post(`${env.baseApi}/auth/login`, payload);
    return await result.json()
  }

  public async register(payload: UserRequest): Promise<AuthResponse> {
    const result = await this.post(`${env.baseApi}/auth/registration`, payload);
    return await result.json()
  }
}