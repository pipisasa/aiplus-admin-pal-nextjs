import { mutationField, nonNull } from 'nexus'

export const SubjectCreateOneMutation = mutationField('createOneSubject', {
  type: nonNull('Subject'),
  args: {
    data: nonNull('SubjectCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.subject.create({
      data,
      ...select,
    })
  },
})
