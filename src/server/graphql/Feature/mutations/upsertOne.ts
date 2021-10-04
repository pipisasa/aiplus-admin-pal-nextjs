import { mutationField, nonNull } from 'nexus'

export const FeatureUpsertOneMutation = mutationField('upsertOneFeature', {
  type: nonNull('Feature'),
  args: {
    where: nonNull('FeatureWhereUniqueInput'),
    create: nonNull('FeatureCreateInput'),
    update: nonNull('FeatureUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.feature.upsert({
      ...args,
      ...select,
    })
  },
})
