import { queryField, list } from 'nexus'

export const FeatureFindFirstQuery = queryField('findFirstFeature', {
  type: 'Feature',
  args: {
    where: 'FeatureWhereInput',
    orderBy: list('FeatureOrderByWithRelationInput'),
    cursor: 'FeatureWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FeatureScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feature.findFirst({
      ...args,
      ...select,
    })
  },
})
