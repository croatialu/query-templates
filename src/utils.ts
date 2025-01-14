import { resolve } from 'node:path'
import process from 'node:process'
import { generateApi } from 'swagger-typescript-api'

export function genVueQueryDefault() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-default'),
    name: 'api',
    modular: false,
    unwrapResponseData: false,
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

export function genVueQueryDefaultFetch() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-default-fetch'),
    name: 'api',
    modular: false,
    unwrapResponseData: false,
    httpClientType: 'fetch',
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

export function genVueQueryDefaultFetchUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-default-fetch-unwrap-response-data'),
    name: 'api',
    modular: false,
    unwrapResponseData: true,
    httpClientType: 'fetch',
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

export function genVueQueryDefaultAxiosUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-default-axios-unwrap-response-data'),
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
    unwrapResponseData: false,
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

export function genVueQueryModularFetch() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-modular-fetch'),
    name: 'api',
    modular: true,
    unwrapResponseData: false,
    httpClientType: 'fetch',
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

export function genVueQueryModularFetchUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-modular-fetch-unwrap-response-data'),
    name: 'api',
    modular: true,
    unwrapResponseData: true,
    httpClientType: 'fetch',
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

export function genVueQueryModularAxiosUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-vue-modular-axios-unwrap-response-data'),
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
    unwrapResponseData: false,
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

export function genReactQueryDefaultFetch() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-default-fetch'),
    name: 'api',
    modular: false,
    unwrapResponseData: false,
    httpClientType: 'fetch',
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

export function genReactQueryDefaultFetchUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-default-fetch-unwrap-response-data'),
    name: 'api',
    modular: false,
    unwrapResponseData: true,
    httpClientType: 'fetch',
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

export function genReactQueryDefaultAxiosUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-default-axios-unwrap-response-data'),
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
    unwrapResponseData: false,
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

export function genReactQueryModularFetch() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-modular-fetch'),
    name: 'api',
    modular: true,
    unwrapResponseData: false,
    httpClientType: 'fetch',
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

export function genReactQueryModularFetchUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-modular-fetch-unwrap-response-data'),
    name: 'api',
    modular: true,
    unwrapResponseData: true,
    httpClientType: 'fetch',
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

export function genReactQueryModularAxiosUnwrapResponseData() {
  return generateApi({
    input: resolve(process.cwd(), 'swagger.json'),
    output: resolve(process.cwd(), '__generated__/api-react-modular-axios-unwrap-response-data'),
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
