import { queryField, nonNull } from 'nexus'

export const StudentFindUniqueQuery = queryField('findUniqueStudent', {
  type: 'Student',
  args: {
    where: nonNull('StudentWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.student.findUnique({
      where,
      ...select,
    })
  },
})
