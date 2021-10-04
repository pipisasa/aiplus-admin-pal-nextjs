import { mutationField, nonNull } from 'nexus'

export const TeacherDeleteOneMutation = mutationField('deleteOneTeacher', {
  type: 'Teacher',
  args: {
    where: nonNull('TeacherWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.teacher.delete({
      where,
      ...select,
    })
  },
})
