import { mutationField, nonNull } from 'nexus'

export const ProgramUpsertOneMutation = mutationField('upsertOneProgram', {
  type: nonNull('Program'),
  args: {
    where: nonNull('ProgramWhereUniqueInput'),
    create: nonNull('ProgramCreateInput'),
    update: nonNull('ProgramUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.program.upsert({
      ...args,
      ...select,
    })
  },
})
