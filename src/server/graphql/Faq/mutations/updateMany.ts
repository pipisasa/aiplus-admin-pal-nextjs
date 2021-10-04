import { mutationField, nonNull } from 'nexus'

export const FaqUpdateManyMutation = mutationField('updateManyFaq', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('FaqUpdateManyMutationInput'),
    where: 'FaqWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.faq.updateMany(args as any)
  },
})
