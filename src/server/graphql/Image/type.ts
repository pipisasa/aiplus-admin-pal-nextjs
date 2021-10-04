import { objectType } from 'nexus'

export const Image = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Image',
  definition(t) {
    t.int('id')
    t.string('name')
    t.int('size')
    t.string('contentType')
    t.string('url')
    t.string('filename')
    t.string('storage')
    t.nullable.field('student', {
      type: 'Student',
      resolve(root: any) {
        return root.student
      },
    })
    t.nullable.int('studentId')
    t.nullable.field('feature', {
      type: 'Feature',
      resolve(root: any) {
        return root.feature
      },
    })
    t.nullable.int('featureId')
    t.nullable.field('teacher', {
      type: 'Teacher',
      resolve(root: any) {
        return root.teacher
      },
    })
    t.nullable.int('teacherId')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
  },
})
