import { mutationField, nonNull } from 'nexus'

export const StudentUpsertOneMutation = mutationField('upsertOneStudent', {
  type: nonNull('Student'),
  args: {
    where: nonNull('StudentWhereUniqueInput'),
    create: nonNull('StudentCreateInput'),
    update: nonNull('StudentUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.student.upsert({
      ...args,
      ...select,
    })
  },
})
