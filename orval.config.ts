import { readFile, writeFile } from 'node:fs/promises'
import { defineConfig } from 'orval'
import ts from 'typescript'

const endpointsPath = './src/shared/api/generated/endpoints.ts'

async function removeEndpointComments() {
  const source = await readFile(endpointsPath, 'utf8')
  const file = ts.createSourceFile(endpointsPath, source, ts.ScriptTarget.Latest)
  const printer = ts.createPrinter({ removeComments: true })
  await writeFile(endpointsPath, printer.printFile(file))
}

export default defineConfig({
  tmdb: {
    input: {
      target: './src/shared/api/schema.json',
    },
    output: {
      client: 'react-query',
      httpClient: 'axios',
      target: endpointsPath,
      schemas: './src/shared/api/generated/model',
      formatter: 'oxfmt',
      override: {
        header: false,
        jsDoc: { filter: () => [] },
        mutator: {
          path: './src/shared/api/tmdbRequest.ts',
          name: 'tmdbRequest',
        },
      },
    },
    hooks: { afterAllFilesWrite: removeEndpointComments },
  },
})
