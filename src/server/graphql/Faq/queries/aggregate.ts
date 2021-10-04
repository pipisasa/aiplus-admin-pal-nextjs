import { queryField, list } from 'nexus'

export const FaqAggregateQuery = queryField('aggregateFaq', {
  type: 'AggregateFaq',
  args: {
    where: 'FaqWhereInput',
    orderBy: list('FaqOrderByWithRelationInput'),
    cursor: 'FaqWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.faq.aggregate({ ...args, ...select }) as any
  },
})
