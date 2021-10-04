import { mutationField, nonNull } from 'nexus'

export const FaqCreateOneMutation = mutationField('createOneFaq', {
  type: nonNull('Faq'),
  args: {
    data: nonNull('FaqCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.faq.create({
      data,
      ...select,
    })
  },
})
