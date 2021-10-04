import { mutationField, nonNull } from 'nexus'

export const SubjectUpdateOneMutation = mutationField('updateOneSubject', {
  type: nonNull('Subject'),
  args: {
    data: nonNull('SubjectUpdateInput'),
    where: nonNull('SubjectWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.subject.update({
      where,
      data,
      ...select,
    })
  },
})
