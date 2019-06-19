import {
  Sequelize,
} from 'sequelize'
import LocalStorage from 'continuation-local-storage'
import {
  getValFromEnv,
} from '../utils'

// 事务对象
Sequelize.useCLS(LocalStorage.createNamespace('verify-local-storage'))

export const sequelize = new Sequelize('blog', getValFromEnv('DATABASE_USERNAME'), getValFromEnv('DATABASE_PASSWORD'), {
  port: +getValFromEnv('DATABASE_PORT'),
  host: getValFromEnv('DATABASE_HOST'),
  dialect: 'mysql',
  ssl: true,
  pool: {
    max: 30
  }
})

sequelize
  .authenticate()
  .then(() => console.log('database connect success'))
  .catch((err: any) => console.error('database connect error', err))
