import { mutationField, nonNull } from 'nexus'

export const ProgramUpdateOneMutation = mutationField('updateOneProgram', {
  type: nonNull('Program'),
  args: {
    data: nonNull('ProgramUpdateInput'),
    where: nonNull('ProgramWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.program.update({
      where,
      data,
      ...select,
    })
  },
})
