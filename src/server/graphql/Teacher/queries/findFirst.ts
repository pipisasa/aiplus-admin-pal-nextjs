import { queryField, list } from 'nexus'

export const TeacherFindFirstQuery = queryField('findFirstTeacher', {
  type: 'Teacher',
  args: {
    where: 'TeacherWhereInput',
    orderBy: list('TeacherOrderByWithRelationInput'),
    cursor: 'TeacherWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('TeacherScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.teacher.findFirst({
      ...args,
      ...select,
    })
  },
})
