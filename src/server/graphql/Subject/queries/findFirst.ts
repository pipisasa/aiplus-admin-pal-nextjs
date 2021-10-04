import { queryField, list } from 'nexus'

export const SubjectFindFirstQuery = queryField('findFirstSubject', {
  type: 'Subject',
  args: {
    where: 'SubjectWhereInput',
    orderBy: list('SubjectOrderByWithRelationInput'),
    cursor: 'SubjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SubjectScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.subject.findFirst({
      ...args,
      ...select,
    })
  },
})
