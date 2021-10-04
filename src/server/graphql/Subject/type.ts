import { objectType } from 'nexus'

export const Subject = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Subject',
  definition(t) {
    t.int('id')
    t.string('titleEn')
    t.string('titleRu')
    t.string('titleKz')
    t.nullable.string('descriptionEn')
    t.nullable.string('descriptionRu')
    t.nullable.string('descriptionKz')
    t.list.field('schools', {
      type: 'Teacher',
      args: {
        where: 'TeacherWhereInput',
        orderBy: 'TeacherOrderByWithRelationInput',
        cursor: 'TeacherWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'TeacherScalarFieldEnum',
      },
      resolve(root: any) {
        return root.schools
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'SubjectCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
