import { Elysia, t } from 'elysia'

const cardModel = t.Object({
  id: t.Number(),
  title: t.String(),
  content: t.String(),
  categories: t.Array(t.String()),
  likes: t.Number(),
  dislikes: t.Number(),
  authorId: t.String(),
  createdAt: t.Date(),
  updatedAt: t.Date(),
})

export const cardsModel = new Elysia().model({
  cardBody: t.Omit(cardModel, [
    'id',
    'likes',
    'dislikes',
    'createdAt',
    'updatedAt',
  ]),
  cardsResponse: t.Array(cardModel),
})