import { mutationField, nonNull } from 'nexus'

export const FaqDeleteOneMutation = mutationField('deleteOneFaq', {
  type: 'Faq',
  args: {
    where: nonNull('FaqWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.faq.delete({
      where,
      ...select,
    })
  },
})
