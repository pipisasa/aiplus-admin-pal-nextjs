import { mutationField, nonNull } from 'nexus'

export const StudentDeleteManyMutation = mutationField('deleteManyStudent', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'StudentWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.student.deleteMany({ where } as any)
  },
})
