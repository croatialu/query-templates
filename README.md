# query-templates

useQuery code generation template based on swagger-typescript-api and @tanstack/query

## Features
- Automatically generate the queryKey creator
- Automatically encapsulate api requests into useQuery and useMutation.
- Typescript type hint in setQueryData

| template | react-query | vue-query |
|--|--|--|
| default | ✅ | ✅ |
| modular | ✅ | ✅ |

try it now! [stackblitz](https://stackblitz.com/~/github.com/croatialu/query-templates?file=src/api/react-default.ts)

## Usage

`default` template

``` ts
import { createApiQuery } from '../../__generated__/api-react-default/Queries'
import { Api } from '../../__generated__/api-react-default/api'

const api = new Api()

const apiQuery = createApiQuery(api)

const { data: _data } = apiQuery.pet.useFindPetsByStatus({
  //            ^?  AxiosResponse<TypePet[], void>> | undefined
  query: {
    status: ['sold'],
  //  ^? ("available" | "pending" | "sold")[]
  },
})

const petQueryUpdate = apiQuery.pet.useQueryUpdate()

petQueryUpdate(
  apiQuery.pet.createFindPetsByStatusQueryKey({
    query: {
      status: ['sold'],
    //  ^? ("available" | "pending" | "sold")[]
    },
  }),
  (oldValue) => {
    // ^? AxiosResponse<TypePet[], void>
    return oldValue
  },
)

const mutation = apiQuery.store.usePlaceOrderMutation(
  {
    onSuccess(_data, { body: _body }) {
      //                ^? TypeOrder
      //        ^? AxiosResponse<TypeOrder>
    },
  },
)

mutation.mutateAsync({
  body: {},
  // ^? TypeOrder
})
```

`modular` template
``` ts
import { createPetApiQuery, createStoreApiQuery, usePetApiQueryUpdate } from '../../__generated__/api-react-modular/Queries'
import { Store } from '../../__generated__/api-react-modular/Store'
import { Pet } from '../../__generated__/api-react-modular/Pet'

const petApi = new Pet()

const petQuery = createPetApiQuery(petApi)

const { data: _data } = petQuery.useFindPetsByStatus({
  //            ^? AxiosResponse<TypePet[], void> | undefined
  query: {
    status: ['sold'],
  //  ^? ("available" | "pending" | "sold")[]
  },
})

const petQueryUpdate = usePetApiQueryUpdate()

petQueryUpdate(
  petQuery.createFindPetsByStatusQueryKey({
    query: {
      status: ['sold'],
    //  ^? ("available" | "pending" | "sold")[]
    },
  }),
  (oldValue) => {
    // ^? AxiosResponse<TypePet[], void>
    return oldValue
  },
)

const storeApi = new Store()
const storeQuery = createStoreApiQuery(storeApi)
const mutation = storeQuery.usePlaceOrderMutation(
  {
    onSuccess(_data, { body: _body }) {
      //                ^? TypeOrder
      //        ^? AxiosResponse<TypeOrder, void>
    },
  },
)

mutation.mutateAsync({
  body: {},
  // ^? TypeOrder
})
```

### Install

``` sh
pnpm i swagger-typescript-api -D
```

### Copy template

Download the template to your project

``` sh
# default template
npx dgit --ref main croatialu/query-templates/templates/default ./templates

# or modular template
npx dgit --ref main croatialu/query-templates/templates/modular ./templates
```

### Create script file (modular)
``` js
// scripts/gen-api/index.mjs

import { resolve } from 'node:path'
import process from 'node:process'
import { generateApi } from 'swagger-typescript-api'

generateApi({
  input: resolve(process.cwd(), 'swagger.json'),
  output: resolve(process.cwd(), '__generated__/api'),
  name: 'api',
  modular: true,
  typePrefix: 'Type',
  templates: resolve(process.cwd(), 'templates/modular'),
  extraTemplates: [
    {
      name: 'Queries',
      path: resolve(process.cwd(), 'templates/modular/vue-query.ejs'),
    },
  ],
})
```
### Generate ts file
``` sh
node ./scripts/gen-api/index.mjs
```

###

## Setup

``` sh
pnpm install

pnpm start
```

## Thanks
- [acacode/swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)
- [@tanstack/query](https://tanstack.com/query/latest)
- [antfu/starter-ts](https://github.com/antfu/starter-ts)
