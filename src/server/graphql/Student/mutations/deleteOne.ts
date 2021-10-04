import { mutationField, nonNull } from 'nexus'

export const StudentDeleteOneMutation = mutationField('deleteOneStudent', {
  type: 'Student',
  args: {
    where: nonNull('StudentWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.student.delete({
      where,
      ...select,
    })
  },
})
