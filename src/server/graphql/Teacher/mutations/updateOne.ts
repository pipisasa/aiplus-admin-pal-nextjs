import { mutationField, nonNull } from 'nexus'

export const TeacherUpdateOneMutation = mutationField('updateOneTeacher', {
  type: nonNull('Teacher'),
  args: {
    data: nonNull('TeacherUpdateInput'),
    where: nonNull('TeacherWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.teacher.update({
      where,
      data,
      ...select,
    })
  },
})
