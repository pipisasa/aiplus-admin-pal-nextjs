import { mutationField, nonNull } from 'nexus'

export const FeatureDeleteManyMutation = mutationField('deleteManyFeature', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'FeatureWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.feature.deleteMany({ where } as any)
  },
})
