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

const petQueryUpdate = apiQuery.usePetApiQueryUpdate()

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
