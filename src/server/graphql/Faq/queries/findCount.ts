import { queryField, nonNull, list } from 'nexus'

export const FaqFindCountQuery = queryField('findManyFaqCount', {
  type: nonNull('Int'),
  args: {
    where: 'FaqWhereInput',
    orderBy: list('FaqOrderByWithRelationInput'),
    cursor: 'FaqWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('FaqScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.faq.count(args as any)
  },
})
