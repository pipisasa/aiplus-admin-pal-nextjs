import { mutationField, nonNull } from 'nexus'

export const FaqDeleteManyMutation = mutationField('deleteManyFaq', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'FaqWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.faq.deleteMany({ where } as any)
  },
})
