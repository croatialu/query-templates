import { createStoreQuery, usePetQueryUpdate } from '../../__generated__/api-vue/Queries'
import { Store } from '../../__generated__/api-vue/Store'
import { createPetQuery } from './../../__generated__/api-vue/Queries'
import { Pet } from './../../__generated__/api-vue/Pet'

const petApi = new Pet()

const petQuery = createPetQuery(petApi)

const { data: _data } = petQuery.useFindPetsByStatus({
  //            ^?  Ref<AxiosResponse<TypePet[], void>> | Ref<undefined>
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
      //                ^? MaybeRef<TypeOrder>
      //        ^? AxiosResponse<TypeOrder>
    },
  },
)

mutation.mutateAsync({
  body: {},
  // ^? MaybeRef<TypeOrder>
})
