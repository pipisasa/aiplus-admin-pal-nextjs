import { mutationField, nonNull } from 'nexus'

export const SubjectDeleteOneMutation = mutationField('deleteOneSubject', {
  type: 'Subject',
  args: {
    where: nonNull('SubjectWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.subject.delete({
      where,
      ...select,
    })
  },
})
