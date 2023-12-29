import { resolve } from 'node:path'
import process from 'node:process'
import { generateApi } from 'swagger-typescript-api'

export function genVueQuery() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue'),
    name: 'api',
    modular: true,
    unwrapResponseData: true,
    httpClientType: 'axios',
    typePrefix: 'Type',
    templates: resolve(process.cwd(), 'templates/modular'),
    extraTemplates: [
      {
        name: 'Queries',
        path: resolve(process.cwd(), 'templates/modular/vue-query.ejs'),
      },
    ],
  })
}

export function genReactQuery() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react'),
    name: 'api',
    modular: true,
    unwrapResponseData: true,
    httpClientType: 'axios',
    typePrefix: 'Type',
    templates: resolve(process.cwd(), 'templates/modular'),
    extraTemplates: [
      {
        name: 'Queries',
        path: resolve(process.cwd(), 'templates/modular/react-query.ejs'),
      },
    ],
  })
}
