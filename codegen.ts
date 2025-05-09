import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://cms.tkgstrator.work/graphql',
  documents: 'src/queries/*.graphql',
  generates: {
    'src/gql/graphql.ts': {
      plugins: [
        {
          typescript: {}
        },
        {
          'typescript-operations': {}
        },
        {
          'typescript-react-query': {
            reactQueryVersion: 5
          }
        }
      ]
    },
    './graphql.schema.json': {
      plugins: ['introspection']
    }
  }
}

export default config
