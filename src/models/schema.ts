import { Zodios, makeApi } from '@zodios/core'
import { z } from 'zod'
import { AboutSchema } from './about.dto'
import { BlogListSchema, BlogSchema} from './blog.dto'
import { CategorySchema } from './category.dto'

const api = makeApi([
  {
    method: 'get',
    path: '/blogs',
    parameters: [
      {
        name: 'populate',
        type: 'Query',
        schema: z.string().optional()
      }
    ],
    response: BlogListSchema
  },
  {
    method: 'get',
    path: '/blogs/:id',
    parameters: [
      {
        name: 'populate',
        type: 'Query',
        schema: z.string().optional()
      }
    ],
    response: BlogSchema
  },
  {
    method: 'get',
    path: '/about',
    response: AboutSchema
  },
  {
    method: 'get',
    path: '/categories',
    parameters: [
      {
        name: 'populate',
        type: 'Query',
        schema: z.string().optional()
      }
    ],
    response: CategorySchema
  },
  {
    method: 'get',
    path: '/categories/:id',
    parameters: [
      {
        name: 'populate',
        type: 'Query',
        schema: z.string().optional()
      }
    ],
    response: CategorySchema
  }
])

export const Client = new Zodios("https://cms.tkgstrator.work/api", api)
