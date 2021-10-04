import { queryField, list } from 'nexus'

export const FaqFindFirstQuery = queryField('findFirstFaq', {
  type: 'Faq',
  args: {
    where: 'FaqWhereInput',
    orderBy: list('FaqOrderByWithRelationInput'),
    cursor: 'FaqWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FaqScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.faq.findFirst({
      ...args,
      ...select,
    })
  },
})
