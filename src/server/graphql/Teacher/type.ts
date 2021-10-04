import { objectType } from 'nexus'

export const Teacher = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Teacher',
  definition(t) {
    t.int('id')
    t.nullable.field('subject', {
      type: 'Subject',
      resolve(root: any) {
        return root.subject
      },
    })
    t.nullable.int('subjectId')
    t.string('firstName')
    t.string('lastName')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('images', {
      type: 'Image',
      args: {
        where: 'ImageWhereInput',
        orderBy: 'ImageOrderByWithRelationInput',
        cursor: 'ImageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ImageScalarFieldEnum',
      },
      resolve(root: any) {
        return root.images
      },
    })
    t.nullable.field('_count', {
      type: 'TeacherCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
