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
