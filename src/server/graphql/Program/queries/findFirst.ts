import { queryField, list } from 'nexus'

export const ProgramFindFirstQuery = queryField('findFirstProgram', {
  type: 'Program',
  args: {
    where: 'ProgramWhereInput',
    orderBy: list('ProgramOrderByWithRelationInput'),
    cursor: 'ProgramWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProgramScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.program.findFirst({
      ...args,
      ...select,
    })
  },
})
