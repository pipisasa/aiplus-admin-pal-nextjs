import { queryField, nonNull, list } from 'nexus'

export const ProgramFindManyQuery = queryField('findManyProgram', {
  type: nonNull(list(nonNull('Program'))),
  args: {
    where: 'ProgramWhereInput',
    orderBy: list('ProgramOrderByWithRelationInput'),
    cursor: 'ProgramWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProgramScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.program.findMany({
      ...args,
      ...select,
    })
  },
})
