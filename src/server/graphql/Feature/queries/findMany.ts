import { queryField, nonNull, list } from 'nexus'

export const FeatureFindManyQuery = queryField('findManyFeature', {
  type: nonNull(list(nonNull('Feature'))),
  args: {
    where: 'FeatureWhereInput',
    orderBy: list('FeatureOrderByWithRelationInput'),
    cursor: 'FeatureWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FeatureScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feature.findMany({
      ...args,
      ...select,
    })
  },
})
