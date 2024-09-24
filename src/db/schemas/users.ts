import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core'
import { lower } from './utils'

export const users = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    username: varchar('username', { length: 256 }).unique().notNull(),
    email: text('email').unique().notNull(),
    password: varchar('password', { length: 256 }).notNull(),
    createdCards: varchar('created_cards', { length: 256 }).array().notNull(),
    favoriteCards: varchar('favorite_cards', { length: 256 }).array().notNull(),
    likedCards: varchar('liked_cards', { length: 256 }).array().notNull(),
    dislikedCards: varchar('disliked_cards', { length: 256 }).array().notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
  },
  table => ({
    usernameUniqueIndex: uniqueIndex('usernameUniqueIndex').on(
      lower(table.username),
    ),
    emailUniqueIndex: uniqueIndex('emailUniqueIndex').on(lower(table.email)),
  }),
)