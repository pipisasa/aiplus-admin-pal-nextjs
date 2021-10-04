import { queryField, nonNull, list } from 'nexus'

export const StudentFindCountQuery = queryField('findManyStudentCount', {
  type: nonNull('Int'),
  args: {
    where: 'StudentWhereInput',
    orderBy: list('StudentOrderByWithRelationInput'),
    cursor: 'StudentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('StudentScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.student.count(args as any)
  },
})
