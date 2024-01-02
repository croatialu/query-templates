# query-templates

useQuery code generation template based on swagger-typescript-api and @tanstack/query

## Features
- Automatically generate the queryKey creator
- Automatically encapsulate api requests into useQuery and useMutation.
- Typescript type hint in setQueryData

| template | react-query | vue-query |
|--|--|--|
| default | WIP... | WIP... |
| modular | ✅ | ✅ |

## Usage

``` ts
import { Pet } from '__generated__/api/Pet'
import { createPetQuery, createStoreQuery, usePetQueryUpdate } from '__generated__/api/Queries'
import { Store } from '__generated__/api/Store'

const petApi = new Pet()

const petQuery = createPetQuery(petApi)

const { data: _data } = petQuery.useFindPetsByStatus({
  //            ^? AxiosResponse<TypePet[], void> | undefined
  query: {
    status: ['sold'],
  //  ^? ("available" | "pending" | "sold")[]
  },
})

const petQueryUpdate = usePetQueryUpdate()

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
const storeQuery = createStoreQuery(storeApi)
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

Download the [modular template](https://github.com/croatialu/query-templates/tree/main/templates/modular) to your project

``` sh
npx dgit --ref main croatialu/query-templates/templates/modular ./templates
```

### Create script file
``` js
// scripts/gen-api/index.js

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

###

## Setup

``` sh
pnpm install

pnpm start
```

## Thanks
- [acacode/swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)
- [@tanstack/query](https://tanstack.com/query/latest)
