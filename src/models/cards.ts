import { Elysia, t } from 'elysia'

export const cardModel = t.Object({
  id: t.Number(),
  title: t.String(),
  content: t.String(),
  categories: t.Array(t.String()),
  likes: t.Number(),
  dislikes: t.Number(),
  authorId: t.Number(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
})

// ToDo: Refactor cards models
export const cardsModels = new Elysia().model({
  cards: t.Object({
    cards: t.Array(cardModel),
    totalCards: t.Numeric(),
    totalPages: t.Numeric(),
  }),
  create: t.Omit(cardModel, [
    'id',
    'likes',
    'dislikes',
    'createdAt',
    'updatedAt',
  ]),
})
