import { queryField, nonNull } from 'nexus'

export const TeacherFindUniqueQuery = queryField('findUniqueTeacher', {
  type: 'Teacher',
  args: {
    where: nonNull('TeacherWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.teacher.findUnique({
      where,
      ...select,
    })
  },
})
