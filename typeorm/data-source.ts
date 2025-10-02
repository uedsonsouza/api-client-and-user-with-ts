import { DataSource } from 'typeorm'
import * as dotenv from 'dotenv'

dotenv.config()

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, PG_HOST, PG_PORT } = process.env

const dataSource = new DataSource({
  type: 'postgres',
  host: PG_HOST || 'localhost',
  port: parseInt(PG_PORT, 10) || 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  migrations: ['dist/typeorm/migrations/*.js'],
  logging: true,
})

module.exports = dataSource