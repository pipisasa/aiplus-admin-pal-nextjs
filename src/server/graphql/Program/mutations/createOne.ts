import { mutationField, nonNull } from 'nexus'

export const ProgramCreateOneMutation = mutationField('createOneProgram', {
  type: nonNull('Program'),
  args: {
    data: nonNull('ProgramCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.program.create({
      data,
      ...select,
    })
  },
})
