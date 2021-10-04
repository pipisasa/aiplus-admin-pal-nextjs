import { queryField, list } from 'nexus'

export const StudentFindFirstQuery = queryField('findFirstStudent', {
  type: 'Student',
  args: {
    where: 'StudentWhereInput',
    orderBy: list('StudentOrderByWithRelationInput'),
    cursor: 'StudentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('StudentScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.student.findFirst({
      ...args,
      ...select,
    })
  },
})
