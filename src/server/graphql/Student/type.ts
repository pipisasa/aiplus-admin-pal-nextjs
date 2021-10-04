import { objectType } from 'nexus'

export const Student = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Student',
  definition(t) {
    t.int('id')
    t.field('school', {
      type: 'School',
      resolve(root: any) {
        return root.school
      },
    })
    t.int('schoolId')
    t.string('firstName')
    t.string('lastName')
    t.field('dateOfFinish', { type: 'DateTime' })
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
      type: 'StudentCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
