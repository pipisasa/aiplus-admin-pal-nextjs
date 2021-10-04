import { queryField, nonNull, list } from 'nexus'

export const FaqFindManyQuery = queryField('findManyFaq', {
  type: nonNull(list(nonNull('Faq'))),
  args: {
    where: 'FaqWhereInput',
    orderBy: list('FaqOrderByWithRelationInput'),
    cursor: 'FaqWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FaqScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.faq.findMany({
      ...args,
      ...select,
    })
  },
})
