import { mutationField, nonNull } from 'nexus'

export const FeatureDeleteOneMutation = mutationField('deleteOneFeature', {
  type: 'Feature',
  args: {
    where: nonNull('FeatureWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.feature.delete({
      where,
      ...select,
    })
  },
})
