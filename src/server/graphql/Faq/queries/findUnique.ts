import { queryField, nonNull } from 'nexus'

export const FaqFindUniqueQuery = queryField('findUniqueFaq', {
  type: 'Faq',
  args: {
    where: nonNull('FaqWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.faq.findUnique({
      where,
      ...select,
    })
  },
})
