import { queryField, nonNull, list } from 'nexus'

export const ProgramFindCountQuery = queryField('findManyProgramCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProgramWhereInput',
    orderBy: list('ProgramOrderByWithRelationInput'),
    cursor: 'ProgramWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
    distinct: list('ProgramScalarFieldEnum'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.program.count(args as any)
  },
})
