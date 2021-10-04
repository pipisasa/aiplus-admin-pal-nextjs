import { mutationField, nonNull } from 'nexus'

export const TeacherUpsertOneMutation = mutationField('upsertOneTeacher', {
  type: nonNull('Teacher'),
  args: {
    where: nonNull('TeacherWhereUniqueInput'),
    create: nonNull('TeacherCreateInput'),
    update: nonNull('TeacherUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.teacher.upsert({
      ...args,
      ...select,
    })
  },
})
