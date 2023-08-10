import {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

export interface UserSchema
  extends Model<
    InferAttributes<UserSchema>,
    InferCreationAttributes<UserSchema>
  > {
  id: CreationOptional<number>;
  name: string;
  email: string;
  password: string;
}
