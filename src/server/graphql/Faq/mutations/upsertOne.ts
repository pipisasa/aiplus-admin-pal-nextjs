import { mutationField, nonNull } from 'nexus'

export const FaqUpsertOneMutation = mutationField('upsertOneFaq', {
  type: nonNull('Faq'),
  args: {
    where: nonNull('FaqWhereUniqueInput'),
    create: nonNull('FaqCreateInput'),
    update: nonNull('FaqUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.faq.upsert({
      ...args,
      ...select,
    })
  },
})
