import { mutationField, nonNull } from 'nexus'

export const ProgramUpdateManyMutation = mutationField('updateManyProgram', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('ProgramUpdateManyMutationInput'),
    where: 'ProgramWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.program.updateMany(args as any)
  },
})
