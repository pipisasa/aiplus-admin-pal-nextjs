import { objectType } from 'nexus'

export const School = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'School',
  definition(t) {
    t.int('id')
    t.field('city', {
      type: 'City',
      resolve(root: any) {
        return root.city
      },
    })
    t.int('cityId')
    t.string('titleEn')
    t.string('titleRu')
    t.string('titleKz')
    t.string('descriptionEn')
    t.string('descriptionRu')
    t.string('descriptionKz')
    t.list.field('programs', {
      type: 'Program',
      args: {
        where: 'ProgramWhereInput',
        orderBy: 'ProgramOrderByWithRelationInput',
        cursor: 'ProgramWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ProgramScalarFieldEnum',
      },
      resolve(root: any) {
        return root.programs
      },
    })
    t.list.field('students', {
      type: 'Student',
      args: {
        where: 'StudentWhereInput',
        orderBy: 'StudentOrderByWithRelationInput',
        cursor: 'StudentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'StudentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.students
      },
    })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('_count', {
      type: 'SchoolCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
