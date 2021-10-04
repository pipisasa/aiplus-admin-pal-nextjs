import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.int('id')
    t.boolean('isAdmin')
    t.string('fio')
    t.string('email')
    t.string('password')
    t.boolean('isBlocked')
    t.field('dateLastLogin', { type: 'DateTime' })
    t.field('passwordChangedTime', { type: 'DateTime' })
    t.nullable.string('rememberToken')
    t.nullable.string('image')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
