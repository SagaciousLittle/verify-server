import {
  Sequelize,
} from 'sequelize'
import LocalStorage from 'continuation-local-storage'

// 事务对象
Sequelize.useCLS(LocalStorage.createNamespace('verify-local-storage'))

function getValFromEnv (key: string) {
  const v = process.env[key]
  if (!v) throw new Error(`the key: ${key} is not found in process.nev, you should config in env file`)
  return v
}

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