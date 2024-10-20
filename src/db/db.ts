import { drizzle } from 'drizzle-orm/postgres-js'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'
import * as schema from './schema'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
  throw Error('Missing DATABASE_URL')
}

const queryClient = postgres(connectionString)

export const db = drizzle(queryClient, { schema })

export type Database = typeof db

const migrationClient = postgres(connectionString, { max: 1 })

await migrate(drizzle(migrationClient, { logger: true }), {
  migrationsFolder: './drizzle',
})
