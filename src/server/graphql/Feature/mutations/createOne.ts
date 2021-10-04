import { mutationField, nonNull } from 'nexus'

export const FeatureCreateOneMutation = mutationField('createOneFeature', {
  type: nonNull('Feature'),
  args: {
    data: nonNull('FeatureCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.feature.create({
      data,
      ...select,
    })
  },
})
