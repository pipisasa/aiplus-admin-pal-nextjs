import { mutationField, nonNull } from 'nexus'

export const SubjectUpsertOneMutation = mutationField('upsertOneSubject', {
  type: nonNull('Subject'),
  args: {
    where: nonNull('SubjectWhereUniqueInput'),
    create: nonNull('SubjectCreateInput'),
    update: nonNull('SubjectUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.subject.upsert({
      ...args,
      ...select,
    })
  },
})
