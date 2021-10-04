import { mutationField, nonNull } from 'nexus'

export const ProgramDeleteManyMutation = mutationField('deleteManyProgram', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ProgramWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.program.deleteMany({ where } as any)
  },
})
