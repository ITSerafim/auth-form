import { ModelCtor } from 'sequelize';
import userModel from '../../database/models/user.model';
import { UserSchema } from '../../database/schemas/user.schema';

class UserRepository {
  private readonly model: ModelCtor<UserSchema>;

  constructor() {
    this.model = userModel;
  }

  public async one(id: number): Promise<UserSchema | null> {
    return await this.model.findOne({ where: { id } });
  }

  public async oneByEmail(email: string): Promise<UserSchema | null> {
    return await this.model.findOne({ where: { email } });
  }

  public async add(payload: UserSchema): Promise<void> {
    await this.model.create(payload);
  }
}

export default UserRepository;
