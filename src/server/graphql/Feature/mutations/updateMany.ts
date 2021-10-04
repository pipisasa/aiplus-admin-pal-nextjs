import { mutationField, nonNull } from 'nexus'

export const FeatureUpdateManyMutation = mutationField('updateManyFeature', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('FeatureUpdateManyMutationInput'),
    where: 'FeatureWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.feature.updateMany(args as any)
  },
})
