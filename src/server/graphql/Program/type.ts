import { objectType } from 'nexus'

export const Program = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Program',
  definition(t) {
    t.int('id')
    t.field('school', {
      type: 'School',
      resolve(root: any) {
        return root.school
      },
    })
    t.int('schoolId')
    t.string('titleEn')
    t.string('titleRu')
    t.string('titleKz')
    t.string('descriptionEn')
    t.string('descriptionRu')
    t.string('descriptionKz')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
