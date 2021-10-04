import { objectType } from 'nexus'

export const Faq = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Faq',
  definition(t) {
    t.int('id')
    t.string('titleRu')
    t.string('titleKz')
    t.string('descriptionRu')
    t.string('descriptionKz')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
