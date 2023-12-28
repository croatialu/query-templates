import { resolve } from 'node:path'
import process from 'node:process'
import { generateApi } from 'swagger-typescript-api'

generateApi({
  // input: resolve(process.cwd(), 'gitlab.openapi.json'),
  input: resolve(process.cwd(), 'swagger.json'),
  output: resolve(process.cwd(), '__generated__/api'),
  name: 'api',
  modular: true,
  unwrapResponseData: true,
  httpClientType: 'axios',
  typePrefix: 'Type',
  templates: resolve(process.cwd(), 'templates/modular'),
})
