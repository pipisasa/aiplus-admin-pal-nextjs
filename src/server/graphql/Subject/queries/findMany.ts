import { queryField, nonNull, list } from 'nexus'

export const SubjectFindManyQuery = queryField('findManySubject', {
  type: nonNull(list(nonNull('Subject'))),
  args: {
    where: 'SubjectWhereInput',
    orderBy: list('SubjectOrderByWithRelationInput'),
    cursor: 'SubjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SubjectScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.subject.findMany({
      ...args,
      ...select,
    })
  },
})
