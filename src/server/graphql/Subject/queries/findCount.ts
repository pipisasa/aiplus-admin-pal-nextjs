import { queryField, nonNull, list } from 'nexus'

export const SubjectFindCountQuery = queryField('findManySubjectCount', {
  type: nonNull('Int'),
  args: {
    where: 'SubjectWhereInput',
    orderBy: list('SubjectOrderByWithRelationInput'),
    cursor: 'SubjectWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('SubjectScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.subject.count(args as any)
  },
})
