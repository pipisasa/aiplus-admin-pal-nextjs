import { queryField, nonNull } from 'nexus'

export const ProgramFindUniqueQuery = queryField('findUniqueProgram', {
  type: 'Program',
  args: {
    where: nonNull('ProgramWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.program.findUnique({
      where,
      ...select,
    })
  },
})
