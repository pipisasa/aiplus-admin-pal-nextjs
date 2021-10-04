import { mutationField, nonNull } from 'nexus'

export const SubjectUpdateManyMutation = mutationField('updateManySubject', {
  type: nonNull('BatchPayload'),
  args: {
    data: nonNull('SubjectUpdateManyMutationInput'),
    where: 'SubjectWhereInput',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.subject.updateMany(args as any)
  },
})
