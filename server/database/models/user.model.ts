import { DataTypes } from 'sequelize';
import db from '../../config/db';
import { UserSchema } from '../schemas/user.schema';

export default db.define<UserSchema>(
  'User',
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING },
  },
  { tableName: 'users', timestamps: false }
);
