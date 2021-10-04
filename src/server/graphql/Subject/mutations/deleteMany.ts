import { mutationField, nonNull } from 'nexus'

export const SubjectDeleteManyMutation = mutationField('deleteManySubject', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'SubjectWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.subject.deleteMany({ where } as any)
  },
})
