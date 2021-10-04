import { queryField, nonNull, list } from 'nexus'

export const TeacherFindManyQuery = queryField('findManyTeacher', {
  type: nonNull(list(nonNull('Teacher'))),
  args: {
    where: 'TeacherWhereInput',
    orderBy: list('TeacherOrderByWithRelationInput'),
    cursor: 'TeacherWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TeacherScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.teacher.findMany({
      ...args,
      ...select,
    })
  },
})
