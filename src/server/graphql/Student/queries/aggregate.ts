import { queryField, list } from 'nexus'

export const StudentAggregateQuery = queryField('aggregateStudent', {
  type: 'AggregateStudent',
  args: {
    where: 'StudentWhereInput',
    orderBy: list('StudentOrderByWithRelationInput'),
    cursor: 'StudentWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.student.aggregate({ ...args, ...select }) as any
  },
})
