import { BaseResponse } from '../../core/responses/base.response';
import { ResponseWithData } from '../../core/responses/with-data.response.';
import { ResponseService } from '../../core/services/response.service';
import { UserSchema } from '../../database/schemas/user.schema';
import UserRepository from './user.repository';

class UserService extends ResponseService<UserSchema> {
  private readonly repository: UserRepository;

  constructor() {
    super();
    this.repository = new UserRepository();
  }

  public async getUserByEmail(
    email: string
  ): Promise<ResponseWithData<UserSchema> | Error> {
    const user = await this.repository.oneByEmail(email);

    if (!user) {
      return this.error('User not found');
    }

    return this.resData(user);
  }

  public async addUser(payload: any): Promise<BaseResponse> {
    await this.repository.add(payload);

    return this.res();
  }
}

export default UserService;
