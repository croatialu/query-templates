/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { MutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";
import { MaybeRef, UnwrapRef, toValue } from "vue";
import { RequestParams } from "./http-client";

import { Pet } from "./Pet";

import { Store } from "./Store";

import { User } from "./User";

import { TypeApiResponse, TypeOrder, TypePet, TypeUser } from "./data-contracts";

/**
  Swagger Petstore
  1.0.6
  This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
*/

type QueryOptions<T, E> = MaybeRef<Omit<UnwrapRef<UseQueryOptions<AxiosResponse<T, E>>>, "queryKey" | "queryFn">>;
type CustomMutationOptions<T, E> = MaybeRef<Omit<UnwrapRef<MutationOptions<AxiosResponse<T, E>>>, "mutationFn">>;

export const createPetQuery = (api: Pet) => {
  return {
    /**
     * No description
     *
     * @tags pet
     * @name UploadFile
     * @summary uploads an image
     * @request POST:/pet/{petId}/uploadImage
     * @secure
     */
    useUploadFileMutation(
      apiParams: {
        petId: MaybeRef<number>;
        data: MaybeRef<{
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        }>;
        requestParams?: MaybeRef<RequestParams>;
      },
      mutationOptions: CustomMutationOptions<TypeApiResponse, any> = {},
    ) {
      const { petId, data, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.uploadFile(toValue(petId), toValue(data), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * No description
     *
     * @tags pet
     * @name AddPet
     * @summary Add a new pet to the store
     * @request POST:/pet
     * @secure
     */
    useAddPetMutation(
      apiParams: { body: MaybeRef<TypePet>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.addPet(toValue(body), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * No description
     *
     * @tags pet
     * @name UpdatePet
     * @summary Update an existing pet
     * @request PUT:/pet
     * @secure
     */
    useUpdatePetMutation(
      apiParams: { body: MaybeRef<TypePet>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.updatePet(toValue(body), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * @description Multiple status values can be provided with comma separated strings
     *
     * @tags pet
     * @name FindPetsByStatus
     * @summary Finds Pets by status
     * @request GET:/pet/findByStatus
     * @secure
     */
    useFindPetsByStatus(
      apiParams: {
        query: MaybeRef<{
          /** Status values that need to be considered for filter */
          status: ("available" | "pending" | "sold")[];
        }>;
        requestParams?: MaybeRef<RequestParams>;
      },
      queryOptions: QueryOptions<TypePet[], void> = {},
    ) {
      const { query, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createFindPetsByStatusQueryKey({ query, requestParams }),
        queryFn: (() => {
          return api.findPetsByStatus(toValue(query), toValue(requestParams));
        }) as any,
      });
    },
    createFindPetsByStatusQueryKey(apiParams: {
      query: MaybeRef<{
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      }>;
      requestParams?: MaybeRef<RequestParams>;
    }) {
      const { query, requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "pet", "get", "/pet/findByStatus", query, requestParams] as const;
    },

    /**
     * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     *
     * @tags pet
     * @name FindPetsByTags
     * @summary Finds Pets by tags
     * @request GET:/pet/findByTags
     * @deprecated
     * @secure
     */
    useFindPetsByTags(
      apiParams: {
        query: MaybeRef<{
          /** Tags to filter by */
          tags: string[];
        }>;
        requestParams?: MaybeRef<RequestParams>;
      },
      queryOptions: QueryOptions<TypePet[], void> = {},
    ) {
      const { query, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createFindPetsByTagsQueryKey({ query, requestParams }),
        queryFn: (() => {
          return api.findPetsByTags(toValue(query), toValue(requestParams));
        }) as any,
      });
    },
    createFindPetsByTagsQueryKey(apiParams: {
      query: MaybeRef<{
        /** Tags to filter by */
        tags: string[];
      }>;
      requestParams?: MaybeRef<RequestParams>;
    }) {
      const { query, requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "pet", "get", "/pet/findByTags", query, requestParams] as const;
    },

    /**
     * @description Returns a single pet
     *
     * @tags pet
     * @name GetPetById
     * @summary Find pet by ID
     * @request GET:/pet/{petId}
     * @secure
     */
    useGetPetById(
      apiParams: { petId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> },
      queryOptions: QueryOptions<TypePet, void> = {},
    ) {
      const { petId, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetPetByIdQueryKey({ petId, requestParams }),
        queryFn: (() => {
          return api.getPetById(toValue(petId), toValue(requestParams));
        }) as any,
      });
    },
    createGetPetByIdQueryKey(apiParams: { petId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> }) {
      const { petId, requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "pet", "get", "/pet/${petId}", petId, requestParams] as const;
    },

    /**
     * No description
     *
     * @tags pet
     * @name UpdatePetWithForm
     * @summary Updates a pet in the store with form data
     * @request POST:/pet/{petId}
     * @secure
     */
    useUpdatePetWithFormMutation(
      apiParams: {
        petId: MaybeRef<number>;
        data: MaybeRef<{
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        }>;
        requestParams?: MaybeRef<RequestParams>;
      },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { petId, data, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.updatePetWithForm(toValue(petId), toValue(data), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * No description
     *
     * @tags pet
     * @name DeletePet
     * @summary Deletes a pet
     * @request DELETE:/pet/{petId}
     * @secure
     */
    useDeletePetMutation(
      apiParams: { petId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { petId, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.deletePet(toValue(petId), toValue(requestParams));
        }) as any,
      });
    },
  };
};

export const usePetQueryUpdate = () => {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "post",
      "/pet/${petId}/uploadImage",
      MaybeRef<number>,
      MaybeRef<{
        /** Additional data to pass to server */
        additionalMetadata?: string;
        /** file to upload */
        file?: File;
      }>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypeApiResponse, any>) => AxiosResponse<TypeApiResponse, any>,
  ): Promise<AxiosResponse<TypeApiResponse, any>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "post", "/pet", MaybeRef<TypePet>, MaybeRef<RequestParams>],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "put", "/pet", MaybeRef<TypePet>, MaybeRef<RequestParams>],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/findByStatus",
      MaybeRef<{
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      }>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypePet[], void>) => AxiosResponse<TypePet[], void>,
  ): Promise<AxiosResponse<TypePet[], void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/findByTags",
      MaybeRef<{
        /** Tags to filter by */
        tags: string[];
      }>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypePet[], void>) => AxiosResponse<TypePet[], void>,
  ): Promise<AxiosResponse<TypePet[], void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/${petId}",
      MaybeRef<number>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypePet, void>) => AxiosResponse<TypePet, void>,
  ): Promise<AxiosResponse<TypePet, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "post",
      "/pet/${petId}",
      MaybeRef<number>,
      MaybeRef<{
        /** Updated name of the pet */
        name?: string;
        /** Updated status of the pet */
        status?: string;
      }>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "delete",
      "/pet/${petId}",
      MaybeRef<number>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
};

export const createStoreQuery = (api: Store) => {
  return {
    /**
     * No description
     *
     * @tags store
     * @name PlaceOrder
     * @summary Place an order for a pet
     * @request POST:/store/order
     */
    usePlaceOrderMutation(
      apiParams: { body: MaybeRef<TypeOrder>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<TypeOrder, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.placeOrder(toValue(body), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     *
     * @tags store
     * @name GetOrderById
     * @summary Find purchase order by ID
     * @request GET:/store/order/{orderId}
     */
    useGetOrderById(
      apiParams: { orderId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> },
      queryOptions: QueryOptions<TypeOrder, void> = {},
    ) {
      const { orderId, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetOrderByIdQueryKey({ orderId, requestParams }),
        queryFn: (() => {
          return api.getOrderById(toValue(orderId), toValue(requestParams));
        }) as any,
      });
    },
    createGetOrderByIdQueryKey(apiParams: { orderId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> }) {
      const { orderId, requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "store", "get", "/store/order/${orderId}", orderId, requestParams] as const;
    },

    /**
     * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     *
     * @tags store
     * @name DeleteOrder
     * @summary Delete purchase order by ID
     * @request DELETE:/store/order/{orderId}
     */
    useDeleteOrderMutation(
      apiParams: { orderId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { orderId, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.deleteOrder(toValue(orderId), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * @description Returns a map of status codes to quantities
     *
     * @tags store
     * @name GetInventory
     * @summary Returns pet inventories by status
     * @request GET:/store/inventory
     * @secure
     */
    useGetInventory(
      apiParams: { requestParams?: MaybeRef<RequestParams> },
      queryOptions: QueryOptions<Record<string, number>, any> = {},
    ) {
      const { requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetInventoryQueryKey({ requestParams }),
        queryFn: (() => {
          return api.getInventory(toValue(requestParams));
        }) as any,
      });
    },
    createGetInventoryQueryKey(apiParams: { requestParams?: MaybeRef<RequestParams> }) {
      const { requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "store", "get", "/store/inventory", requestParams] as const;
    },
  };
};

export const useStoreQueryUpdate = () => {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "store",
      "post",
      "/store/order",
      MaybeRef<TypeOrder>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypeOrder, void>) => AxiosResponse<TypeOrder, void>,
  ): Promise<AxiosResponse<TypeOrder, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "store",
      "get",
      "/store/order/${orderId}",
      MaybeRef<number>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypeOrder, void>) => AxiosResponse<TypeOrder, void>,
  ): Promise<AxiosResponse<TypeOrder, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "store",
      "delete",
      "/store/order/${orderId}",
      MaybeRef<number>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "get", "/store/inventory", MaybeRef<RequestParams>],
    updater: (data: AxiosResponse<Record<string, number>, any>) => AxiosResponse<Record<string, number>, any>,
  ): Promise<AxiosResponse<Record<string, number>, any>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
};

export const createUserQuery = (api: User) => {
  return {
    /**
     * No description
     *
     * @tags user
     * @name CreateUsersWithArrayInput
     * @summary Creates list of users with given input array
     * @request POST:/user/createWithArray
     */
    useCreateUsersWithArrayInputMutation(
      apiParams: { body: MaybeRef<TypeUser[]>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.createUsersWithArrayInput(toValue(body), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * No description
     *
     * @tags user
     * @name CreateUsersWithListInput
     * @summary Creates list of users with given input array
     * @request POST:/user/createWithList
     */
    useCreateUsersWithListInputMutation(
      apiParams: { body: MaybeRef<TypeUser[]>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.createUsersWithListInput(toValue(body), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * No description
     *
     * @tags user
     * @name GetUserByName
     * @summary Get user by user name
     * @request GET:/user/{username}
     */
    useGetUserByName(
      apiParams: { username: MaybeRef<string>; requestParams?: MaybeRef<RequestParams> },
      queryOptions: QueryOptions<TypeUser, void> = {},
    ) {
      const { username, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetUserByNameQueryKey({ username, requestParams }),
        queryFn: (() => {
          return api.getUserByName(toValue(username), toValue(requestParams));
        }) as any,
      });
    },
    createGetUserByNameQueryKey(apiParams: { username: MaybeRef<string>; requestParams?: MaybeRef<RequestParams> }) {
      const { username, requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "user", "get", "/user/${username}", username, requestParams] as const;
    },

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name UpdateUser
     * @summary Updated user
     * @request PUT:/user/{username}
     */
    useUpdateUserMutation(
      apiParams: { username: MaybeRef<string>; body: MaybeRef<TypeUser>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { username, body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.updateUser(toValue(username), toValue(body), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name DeleteUser
     * @summary Delete user
     * @request DELETE:/user/{username}
     */
    useDeleteUserMutation(
      apiParams: { username: MaybeRef<string>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { username, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.deleteUser(toValue(username), toValue(requestParams));
        }) as any,
      });
    },

    /**
     * No description
     *
     * @tags user
     * @name LoginUser
     * @summary Logs user into the system
     * @request GET:/user/login
     */
    useLoginUser(
      apiParams: {
        query: MaybeRef<{
          /** The user name for login */
          username: string;
          /** The password for login in clear text */
          password: string;
        }>;
        requestParams?: MaybeRef<RequestParams>;
      },
      queryOptions: QueryOptions<string, void> = {},
    ) {
      const { query, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createLoginUserQueryKey({ query, requestParams }),
        queryFn: (() => {
          return api.loginUser(toValue(query), toValue(requestParams));
        }) as any,
      });
    },
    createLoginUserQueryKey(apiParams: {
      query: MaybeRef<{
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      }>;
      requestParams?: MaybeRef<RequestParams>;
    }) {
      const { query, requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "user", "get", "/user/login", query, requestParams] as const;
    },

    /**
     * No description
     *
     * @tags user
     * @name LogoutUser
     * @summary Logs out current logged in user session
     * @request GET:/user/logout
     */
    useLogoutUser(apiParams: { requestParams?: MaybeRef<RequestParams> }, queryOptions: QueryOptions<any, void> = {}) {
      const { requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createLogoutUserQueryKey({ requestParams }),
        queryFn: (() => {
          return api.logoutUser(toValue(requestParams));
        }) as any,
      });
    },
    createLogoutUserQueryKey(apiParams: { requestParams?: MaybeRef<RequestParams> }) {
      const { requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "user", "get", "/user/logout", requestParams] as const;
    },

    /**
     * @description This can only be done by the logged in user.
     *
     * @tags user
     * @name CreateUser
     * @summary Create user
     * @request POST:/user
     */
    useCreateUserMutation(
      apiParams: { body: MaybeRef<TypeUser>; requestParams?: MaybeRef<RequestParams> },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.createUser(toValue(body), toValue(requestParams));
        }) as any,
      });
    },
  };
};

export const useUserQueryUpdate = () => {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "post",
      "/user/createWithArray",
      MaybeRef<TypeUser[]>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "post",
      "/user/createWithList",
      MaybeRef<TypeUser[]>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "get",
      "/user/${username}",
      MaybeRef<string>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<TypeUser, void>) => AxiosResponse<TypeUser, void>,
  ): Promise<AxiosResponse<TypeUser, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "put",
      "/user/${username}",
      MaybeRef<string>,
      MaybeRef<TypeUser>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "delete",
      "/user/${username}",
      MaybeRef<string>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "get",
      "/user/login",
      MaybeRef<{
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      }>,
      MaybeRef<RequestParams>,
    ],
    updater: (data: AxiosResponse<string, void>) => AxiosResponse<string, void>,
  ): Promise<AxiosResponse<string, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "get", "/user/logout", MaybeRef<RequestParams>],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user", MaybeRef<TypeUser>, MaybeRef<RequestParams>],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
};
