import { mutationField, nonNull } from 'nexus'

export const ProgramDeleteOneMutation = mutationField('deleteOneProgram', {
  type: 'Program',
  args: {
    where: nonNull('ProgramWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.program.delete({
      where,
      ...select,
    })
  },
})
