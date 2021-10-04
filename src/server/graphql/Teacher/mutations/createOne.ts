import { mutationField, nonNull } from 'nexus'

export const TeacherCreateOneMutation = mutationField('createOneTeacher', {
  type: nonNull('Teacher'),
  args: {
    data: nonNull('TeacherCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.teacher.create({
      data,
      ...select,
    })
  },
})
