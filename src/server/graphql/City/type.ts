import { objectType } from 'nexus'

export const City = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'City',
  definition(t) {
    t.int('id')
    t.string('name')
    t.list.field('schools', {
      type: 'School',
      args: {
        where: 'SchoolWhereInput',
        orderBy: 'SchoolOrderByWithRelationInput',
        cursor: 'SchoolWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SchoolScalarFieldEnum',
      },
      resolve(root: any) {
        return root.schools
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'CityCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
