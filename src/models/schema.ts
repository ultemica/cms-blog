import { Zodios, makeApi } from '@zodios/core'
import { z } from 'zod'
import { AboutSchema } from './about.dto'
import { BlogListSchema, BlogSchema, DatumSchema } from './blog.dto'

const api = makeApi([
  {
    method: 'get',
    path: '/blogs',
    response: BlogListSchema
  },
  {
    method: 'get',
    path: '/blogs/:id',
    response: BlogSchema
  },
  {
    method: 'get',
    path: '/about',
    response: AboutSchema
  }
])

export const Client = new Zodios("https://cms.tkgstrator.work/api", api)
