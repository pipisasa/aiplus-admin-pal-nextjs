import { mutationField, nonNull } from 'nexus'

export const TeacherDeleteManyMutation = mutationField('deleteManyTeacher', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TeacherWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.teacher.deleteMany({ where } as any)
  },
})
