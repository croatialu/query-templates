import { createPetApiQuery, createStoreApiQuery, usePetApiQueryUpdate } from '../../__generated__/api-vue-modular/Queries'
import { Store } from '../../__generated__/api-vue-modular/Store'
import { Pet } from '../../__generated__/api-vue-modular/Pet'

const petApi = new Pet()

const petQuery = createPetApiQuery(petApi)

const { data: _data } = petQuery.useFindPetsByStatus({
  //            ^?  Ref<AxiosResponse<TypePet[], void>> | Ref<undefined>
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
      //        ^? AxiosResponse<TypeOrder>
    },
  },
)

mutation.mutateAsync({
  body: {},
  // ^? TypeOrder
})
