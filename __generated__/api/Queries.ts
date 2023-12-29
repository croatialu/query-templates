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

import { MutationOptions, UseQueryOptions, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";
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

type QueryOptions<T, E> = Omit<UseQueryOptions<AxiosResponse<T, E>>, "queryKey" | "queryFn">;
type CustomMutationOptions<T, E> = Omit<MutationOptions<AxiosResponse<T, E>>, "mutationFn">;

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
        petId: number;
        data: {
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        };
        requestParams?: RequestParams;
      },
      mutationOptions: CustomMutationOptions<TypeApiResponse, any> = {},
    ) {
      const { petId, data, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.uploadFile(petId, data, requestParams);
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
      apiParams: { body: TypePet; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.addPet(body, requestParams);
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
      apiParams: { body: TypePet; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.updatePet(body, requestParams);
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
        query: {
          /** Status values that need to be considered for filter */
          status: ("available" | "pending" | "sold")[];
        };
        requestParams?: RequestParams;
      },
      queryOptions: QueryOptions<TypePet[], void> = {},
    ) {
      const { query, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createFindPetsByStatusQueryKey({ query, requestParams }),
        queryFn: (() => {
          return api.findPetsByStatus(query, requestParams);
        }) as any,
      });
    },
    createFindPetsByStatusQueryKey(apiParams: {
      query: {
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      };
      requestParams?: RequestParams;
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
        query: {
          /** Tags to filter by */
          tags: string[];
        };
        requestParams?: RequestParams;
      },
      queryOptions: QueryOptions<TypePet[], void> = {},
    ) {
      const { query, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createFindPetsByTagsQueryKey({ query, requestParams }),
        queryFn: (() => {
          return api.findPetsByTags(query, requestParams);
        }) as any,
      });
    },
    createFindPetsByTagsQueryKey(apiParams: {
      query: {
        /** Tags to filter by */
        tags: string[];
      };
      requestParams?: RequestParams;
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
      apiParams: { petId: number; requestParams?: RequestParams },
      queryOptions: QueryOptions<TypePet, void> = {},
    ) {
      const { petId, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetPetByIdQueryKey({ petId, requestParams }),
        queryFn: (() => {
          return api.getPetById(petId, requestParams);
        }) as any,
      });
    },
    createGetPetByIdQueryKey(apiParams: { petId: number; requestParams?: RequestParams }) {
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
        petId: number;
        data: {
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        };
        requestParams?: RequestParams;
      },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { petId, data, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.updatePetWithForm(petId, data, requestParams);
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
      apiParams: { petId: number; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { petId, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.deletePet(petId, requestParams);
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
      number,
      {
        /** Additional data to pass to server */
        additionalMetadata?: string;
        /** file to upload */
        file?: File;
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<TypeApiResponse, any>) => AxiosResponse<TypeApiResponse, any>,
  ): Promise<AxiosResponse<TypeApiResponse, any>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "post", "/pet", TypePet, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "put", "/pet", TypePet, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/findByStatus",
      {
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<TypePet[], void>) => AxiosResponse<TypePet[], void>,
  ): Promise<AxiosResponse<TypePet[], void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "get",
      "/pet/findByTags",
      {
        /** Tags to filter by */
        tags: string[];
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<TypePet[], void>) => AxiosResponse<TypePet[], void>,
  ): Promise<AxiosResponse<TypePet[], void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "get", "/pet/${petId}", number, RequestParams],
    updater: (data: AxiosResponse<TypePet, void>) => AxiosResponse<TypePet, void>,
  ): Promise<AxiosResponse<TypePet, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "pet",
      "post",
      "/pet/${petId}",
      number,
      {
        /** Updated name of the pet */
        name?: string;
        /** Updated status of the pet */
        status?: string;
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "pet", "delete", "/pet/${petId}", number, RequestParams],
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
      apiParams: { body: TypeOrder; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<TypeOrder, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.placeOrder(body, requestParams);
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
      apiParams: { orderId: number; requestParams?: RequestParams },
      queryOptions: QueryOptions<TypeOrder, void> = {},
    ) {
      const { orderId, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetOrderByIdQueryKey({ orderId, requestParams }),
        queryFn: (() => {
          return api.getOrderById(orderId, requestParams);
        }) as any,
      });
    },
    createGetOrderByIdQueryKey(apiParams: { orderId: number; requestParams?: RequestParams }) {
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
      apiParams: { orderId: number; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { orderId, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.deleteOrder(orderId, requestParams);
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
      apiParams: { requestParams?: RequestParams },
      queryOptions: QueryOptions<Record<string, number>, any> = {},
    ) {
      const { requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetInventoryQueryKey({ requestParams }),
        queryFn: (() => {
          return api.getInventory(requestParams);
        }) as any,
      });
    },
    createGetInventoryQueryKey(apiParams: { requestParams?: RequestParams }) {
      const { requestParams = {} } = apiParams;
      return ["swagger-typescript-api", "store", "get", "/store/inventory", requestParams] as const;
    },
  };
};

export const useStoreQueryUpdate = () => {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "post", "/store/order", TypeOrder, RequestParams],
    updater: (data: AxiosResponse<TypeOrder, void>) => AxiosResponse<TypeOrder, void>,
  ): Promise<AxiosResponse<TypeOrder, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "get", "/store/order/${orderId}", number, RequestParams],
    updater: (data: AxiosResponse<TypeOrder, void>) => AxiosResponse<TypeOrder, void>,
  ): Promise<AxiosResponse<TypeOrder, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "delete", "/store/order/${orderId}", number, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "store", "get", "/store/inventory", RequestParams],
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
      apiParams: { body: TypeUser[]; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.createUsersWithArrayInput(body, requestParams);
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
      apiParams: { body: TypeUser[]; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.createUsersWithListInput(body, requestParams);
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
      apiParams: { username: string; requestParams?: RequestParams },
      queryOptions: QueryOptions<TypeUser, void> = {},
    ) {
      const { username, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createGetUserByNameQueryKey({ username, requestParams }),
        queryFn: (() => {
          return api.getUserByName(username, requestParams);
        }) as any,
      });
    },
    createGetUserByNameQueryKey(apiParams: { username: string; requestParams?: RequestParams }) {
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
      apiParams: { username: string; body: TypeUser; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { username, body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.updateUser(username, body, requestParams);
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
      apiParams: { username: string; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { username, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.deleteUser(username, requestParams);
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
        query: {
          /** The user name for login */
          username: string;
          /** The password for login in clear text */
          password: string;
        };
        requestParams?: RequestParams;
      },
      queryOptions: QueryOptions<string, void> = {},
    ) {
      const { query, requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createLoginUserQueryKey({ query, requestParams }),
        queryFn: (() => {
          return api.loginUser(query, requestParams);
        }) as any,
      });
    },
    createLoginUserQueryKey(apiParams: {
      query: {
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      };
      requestParams?: RequestParams;
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
    useLogoutUser(apiParams: { requestParams?: RequestParams }, queryOptions: QueryOptions<any, void> = {}) {
      const { requestParams = {} } = apiParams;
      return useQuery({
        ...queryOptions,
        queryKey: this.createLogoutUserQueryKey({ requestParams }),
        queryFn: (() => {
          return api.logoutUser(requestParams);
        }) as any,
      });
    },
    createLogoutUserQueryKey(apiParams: { requestParams?: RequestParams }) {
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
      apiParams: { body: TypeUser; requestParams?: RequestParams },
      mutationOptions: CustomMutationOptions<any, void> = {},
    ) {
      const { body, requestParams = {} } = apiParams;
      return useMutation({
        ...mutationOptions,
        mutationFn: (() => {
          return api.createUser(body, requestParams);
        }) as any,
      });
    },
  };
};

export const useUserQueryUpdate = () => {
  const queryClient = useQueryClient();

  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user/createWithArray", TypeUser[], RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user/createWithList", TypeUser[], RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "get", "/user/${username}", string, RequestParams],
    updater: (data: AxiosResponse<TypeUser, void>) => AxiosResponse<TypeUser, void>,
  ): Promise<AxiosResponse<TypeUser, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "put", "/user/${username}", string, TypeUser, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "delete", "/user/${username}", string, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly [
      "swagger-typescript-api",
      "user",
      "get",
      "/user/login",
      {
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      },
      RequestParams,
    ],
    updater: (data: AxiosResponse<string, void>) => AxiosResponse<string, void>,
  ): Promise<AxiosResponse<string, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "get", "/user/logout", RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(
    queryKey: readonly ["swagger-typescript-api", "user", "post", "/user", TypeUser, RequestParams],
    updater: (data: AxiosResponse<any, void>) => AxiosResponse<any, void>,
  ): Promise<AxiosResponse<any, void>>;
  function setQueryData(queryKey: any, updater: any) {
    return queryClient.setQueryData(queryKey, updater);
  }

  return setQueryData;
};
