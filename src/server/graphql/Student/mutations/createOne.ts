import { mutationField, nonNull } from 'nexus'

export const StudentCreateOneMutation = mutationField('createOneStudent', {
  type: nonNull('Student'),
  args: {
    data: nonNull('StudentCreateInput'),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.student.create({
      data,
      ...select,
    })
  },
})
