import { queryField, list } from 'nexus'

export const SubjectAggregateQuery = queryField('aggregateSubject', {
  type: 'AggregateSubject',
  args: {
    where: 'SubjectWhereInput',
    orderBy: list('SubjectOrderByWithRelationInput'),
    cursor: 'SubjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.subject.aggregate({ ...args, ...select }) as any
  },
})
