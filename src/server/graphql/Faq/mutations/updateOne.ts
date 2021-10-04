import { mutationField, nonNull } from 'nexus'

export const FaqUpdateOneMutation = mutationField('updateOneFaq', {
  type: nonNull('Faq'),
  args: {
    data: nonNull('FaqUpdateInput'),
    where: nonNull('FaqWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.faq.update({
      where,
      data,
      ...select,
    })
  },
})
