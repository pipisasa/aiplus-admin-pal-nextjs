import { mutationField, nonNull } from 'nexus'

export const StudentUpdateOneMutation = mutationField('updateOneStudent', {
  type: nonNull('Student'),
  args: {
    data: nonNull('StudentUpdateInput'),
    where: nonNull('StudentWhereUniqueInput'),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.student.update({
      where,
      data,
      ...select,
    })
  },
})
