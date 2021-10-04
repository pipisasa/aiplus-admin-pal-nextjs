import { queryField, nonNull, list } from 'nexus'

export const StudentFindManyQuery = queryField('findManyStudent', {
  type: nonNull(list(nonNull('Student'))),
  args: {
    where: 'StudentWhereInput',
    orderBy: list('StudentOrderByWithRelationInput'),
    cursor: 'StudentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('StudentScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.student.findMany({
      ...args,
      ...select,
    })
  },
})
