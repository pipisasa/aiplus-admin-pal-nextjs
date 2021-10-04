import { queryField, nonNull } from 'nexus'

export const SubjectFindUniqueQuery = queryField('findUniqueSubject', {
  type: 'Subject',
  args: {
    where: nonNull('SubjectWhereUniqueInput'),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.subject.findUnique({
      where,
      ...select,
    })
  },
})
