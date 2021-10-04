import { queryField, list } from 'nexus'

export const TeacherAggregateQuery = queryField('aggregateTeacher', {
  type: 'AggregateTeacher',
  args: {
    where: 'TeacherWhereInput',
    orderBy: list('TeacherOrderByWithRelationInput'),
    cursor: 'TeacherWhereUniqueInput',
    take: 'Int',
    skip: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.teacher.aggregate({ ...args, ...select }) as any
  },
})
