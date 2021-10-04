import { queryField, list } from 'nexus'

export const ProgramAggregateQuery = queryField('aggregateProgram', {
  type: 'AggregateProgram',
  args: {
    where: 'ProgramWhereInput',
    orderBy: list('ProgramOrderByWithRelationInput'),
    cursor: 'ProgramWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.program.aggregate({ ...args, ...select }) as any
  },
})
