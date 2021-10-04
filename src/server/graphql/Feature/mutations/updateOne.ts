import { mutationField, nonNull } from 'nexus'

export const FeatureUpdateOneMutation = mutationField('updateOneFeature', {
  type: nonNull('Feature'),
  args: {
    data: nonNull('FeatureUpdateInput'),
    where: nonNull('FeatureWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.feature.update({
      where,
      data,
      ...select,
    })
  },
})
