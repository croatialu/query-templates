import { createStoreQuery, usePetQueryUpdate } from '../../__generated__/api-react/Queries'
import { Store } from '../../__generated__/api-react/Store'
import { createPetQuery } from './../../__generated__/api-react/Queries'
import { Pet } from './../../__generated__/api-react/Pet'

const petApi = new Pet()

const petQuery = createPetQuery(petApi)

const { data: _data } = petQuery.useFindPetsByStatus({
  //            ^? Ref<TypePet[]> | Ref<undefined>
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
    // ^? TypePet[]
    return oldValue
  },
)

const storeApi = new Store()
const storeQuery = createStoreQuery(storeApi)
storeQuery.usePlaceOrderMutation(
  {
    body: {},
    // ^? MaybeRef<TypeOrder>
  },
  {
    onSuccess(_data) {
      //        ^? TypeOrder
    },
  },
)
