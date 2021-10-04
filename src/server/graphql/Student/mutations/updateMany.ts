import { mutationField, nonNull } from 'nexus'

export const StudentUpdateManyMutation = mutationField('updateManyStudent', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('StudentUpdateManyMutationInput'),
    where: 'StudentWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.student.updateMany(args as any)
  },
})
