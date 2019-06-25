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


/**
 * 跨域白名单
 *
 * @export
 * @class OriginWhiteList
 * @extends {Model}
 */
export class OriginWhiteList extends Model {
  public id!: number
  public originIp!: string
  public type!: number
}

/* 白名单模块类型，便于以后扩展 */
enum OriginWhiteListType {
  PUBLIC,
}

OriginWhiteList.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  originIp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.INTEGER,
    defaultValue: OriginWhiteListType.PUBLIC
  }
}, {sequelize})

sequelize.sync()
