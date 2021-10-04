import { mutationField, nonNull } from 'nexus'

export const TeacherUpdateManyMutation = mutationField('updateManyTeacher', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('TeacherUpdateManyMutationInput'),
    where: 'TeacherWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.teacher.updateMany(args as any)
  },
})
