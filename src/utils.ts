import { resolve } from 'node:path'
import process from 'node:process'
import { generateApi } from 'swagger-typescript-api'

export function genVueQueryDefault() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-default'),
    name: 'api',
    modular: false,
    unwrapResponseData: true,
    httpClientType: 'axios',
    typePrefix: 'Type',
    templates: resolve(process.cwd(), 'templates/default'),
    extraTemplates: [
      {
        name: 'Queries',
        path: resolve(process.cwd(), 'templates/default/vue-query.ejs'),
      },
    ],
  })
}

export function genVueQueryModular() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-modular'),
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

export function genReactQueryDefault() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-default'),
    name: 'api',
    modular: false,
    unwrapResponseData: true,
    httpClientType: 'axios',
    typePrefix: 'Type',
    templates: resolve(process.cwd(), 'templates/default'),
    extraTemplates: [
      {
        name: 'Queries',
        path: resolve(process.cwd(), 'templates/default/react-query.ejs'),
      },
    ],
  })
}

export function genReactQueryModular() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-modular'),
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
