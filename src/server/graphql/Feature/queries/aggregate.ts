import { queryField, list } from 'nexus'

export const FeatureAggregateQuery = queryField('aggregateFeature', {
  type: 'AggregateFeature',
  args: {
    where: 'FeatureWhereInput',
    orderBy: list('FeatureOrderByWithRelationInput'),
    cursor: 'FeatureWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feature.aggregate({ ...args, ...select }) as any
  },
})
