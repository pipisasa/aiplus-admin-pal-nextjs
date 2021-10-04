import { queryField, nonNull, list } from 'nexus'

export const FeatureFindCountQuery = queryField('findManyFeatureCount', {
  type: nonNull('Int'),
  args: {
    where: 'FeatureWhereInput',
    orderBy: list('FeatureOrderByWithRelationInput'),
    cursor: 'FeatureWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FeatureScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.feature.count(args as any)
  },
})
