import { queryField, nonNull, list } from 'nexus'

export const TeacherFindCountQuery = queryField('findManyTeacherCount', {
  type: nonNull('Int'),
  args: {
    where: 'TeacherWhereInput',
    orderBy: list('TeacherOrderByWithRelationInput'),
    cursor: 'TeacherWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TeacherScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.teacher.count(args as any)
  },
})
