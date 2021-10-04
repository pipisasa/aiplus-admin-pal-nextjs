import { objectType } from 'nexus'

export const Feature = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Feature',
  definition(t) {
    t.int('id')
    t.string('titleKz')
    t.string('titleRu')
    t.string('titleEn')
    t.string('contentKz')
    t.string('contentRu')
    t.string('contentEn')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.list.field('images', {
      type: 'Image',
      args: {
        where: 'ImageWhereInput',
        orderBy: 'ImageOrderByWithRelationInput',
        cursor: 'ImageWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ImageScalarFieldEnum',
      },
      resolve(root: any) {
        return root.images
      },
    })
    t.nullable.field('_count', {
      type: 'FeatureCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
