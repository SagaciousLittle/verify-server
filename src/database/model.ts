import {
  Model,
  DataTypes,
} from 'sequelize'
import {
  sequelize,
} from './index'

/**
 * 用户信息
 *
 * @export
 * @class User
 * @extends {Model}
 */
export class User extends Model {
  public id!: number
  public level!: number
  public pid!: number
  public username!: string
  public password!: string
  public readName?: string
  public age?: number
  public address?: string
  public phone?: string
  public city?: string
  public avatar?: string
  public email!: string
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  level: {
    type: DataTypes.INTEGER,
  },
  pid: {
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  password: {
    type: DataTypes.STRING,
  },
  readName: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
}, {
  sequelize,
  tableName: 'User',
  createdAt: false,
  updatedAt: false,
})

sequelize.sync()
