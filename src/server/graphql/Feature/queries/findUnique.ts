import { queryField, nonNull } from 'nexus'

export const FeatureFindUniqueQuery = queryField('findUniqueFeature', {
  type: 'Feature',
  args: {
    where: nonNull('FeatureWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.feature.findUnique({
      where,
      ...select,
    })
  },
})
