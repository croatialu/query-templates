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

import { MutationOptions, QueryKey, useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/vue-query";
import type { AxiosResponse } from "axios";
import { MaybeRef, toValue, UnwrapRef } from "vue";
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

// @ts-ignore
type CustomQueryOptions<T, E> = MaybeRef<
  Omit<UnwrapRef<UseQueryOptions<AxiosResponse<T, E>, E>>, "queryKey" | "queryFn">
>;
// @ts-ignore
type CustomMutationOptions<T, E, V> = Omit<MutationOptions<AxiosResponse<T, E>, E, V>, "mutationFn">;

export const createPetApiQuery = (api: Pet<unknown>) => {
  /**
   * No description
   *
   * @tags pet
   * @name UploadFile
   * @summary uploads an image
   * @request POST:/pet/{petId}/uploadImage
   * @secure
   */
  function useUploadFileMutation(
    mutationOptions: CustomMutationOptions<
      TypeApiResponse,
      any,
      {
        petId: number;
        data: {
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        };
        requestParams?: RequestParams;
      }
    > = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: {
        petId: number;
        data: {
          /** Additional data to pass to server */
          additionalMetadata?: string;
          /** file to upload */
          file?: File;
        };
        requestParams?: RequestParams;
      }) => {
        const { petId, data, requestParams = {} } = apiParams;

        return api.uploadFile(petId!, data!, requestParams);
      },
    });
  }

  /**
   * No description
   *
   * @tags pet
   * @name AddPet
   * @summary Add a new pet to the store
   * @request POST:/pet
   * @secure
   */
  function useAddPetMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypePet; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { body: TypePet; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        return api.addPet(body!, requestParams);
      },
    });
  }

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePet
   * @summary Update an existing pet
   * @request PUT:/pet
   * @secure
   */
  function useUpdatePetMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypePet; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { body: TypePet; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        return api.updatePet(body!, requestParams);
      },
    });
  }

  /**
   * @description Multiple status values can be provided with comma separated strings
   *
   * @tags pet
   * @name FindPetsByStatus
   * @summary Finds Pets by status
   * @request GET:/pet/findByStatus
   * @secure
   */
  function useFindPetsByStatus(
    apiParams: {
      query: MaybeRef<{
        /** Status values that need to be considered for filter */
        status: ("available" | "pending" | "sold")[];
      }>;
      requestParams?: MaybeRef<RequestParams>;
    },
    queryOptions: CustomQueryOptions<TypePet[], void> = {},
  ) {
    const { query, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createFindPetsByStatusQueryKey({ query, requestParams }) as QueryKey,
      queryFn: () => {
        return api.findPetsByStatus(toValue(query)!, toValue(requestParams));
      },
    });
  }
  function createFindPetsByStatusQueryKey(apiParams: {
    query: MaybeRef<{
      /** Status values that need to be considered for filter */
      status: ("available" | "pending" | "sold")[];
    }>;
    requestParams?: MaybeRef<RequestParams>;
  }) {
    const { query, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "pet", "get", "/pet/findByStatus", query, requestParams] as const;
  }

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
  function useFindPetsByTags(
    apiParams: {
      query: MaybeRef<{
        /** Tags to filter by */
        tags: string[];
      }>;
      requestParams?: MaybeRef<RequestParams>;
    },
    queryOptions: CustomQueryOptions<TypePet[], void> = {},
  ) {
    const { query, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createFindPetsByTagsQueryKey({ query, requestParams }) as QueryKey,
      queryFn: () => {
        return api.findPetsByTags(toValue(query)!, toValue(requestParams));
      },
    });
  }
  function createFindPetsByTagsQueryKey(apiParams: {
    query: MaybeRef<{
      /** Tags to filter by */
      tags: string[];
    }>;
    requestParams?: MaybeRef<RequestParams>;
  }) {
    const { query, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "pet", "get", "/pet/findByTags", query, requestParams] as const;
  }

  /**
   * @description Returns a single pet
   *
   * @tags pet
   * @name GetPetById
   * @summary Find pet by ID
   * @request GET:/pet/{petId}
   * @secure
   */
  function useGetPetById(
    apiParams: { petId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> },
    queryOptions: CustomQueryOptions<TypePet, void> = {},
  ) {
    const { petId, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetPetByIdQueryKey({ petId, requestParams }) as QueryKey,
      queryFn: () => {
        return api.getPetById(toValue(petId)!, toValue(requestParams));
      },
    });
  }
  function createGetPetByIdQueryKey(apiParams: { petId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> }) {
    const { petId, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "pet", "get", "/pet/${petId}", petId, requestParams] as const;
  }

  /**
   * No description
   *
   * @tags pet
   * @name UpdatePetWithForm
   * @summary Updates a pet in the store with form data
   * @request POST:/pet/{petId}
   * @secure
   */
  function useUpdatePetWithFormMutation(
    mutationOptions: CustomMutationOptions<
      any,
      void,
      {
        petId: number;
        data: {
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        };
        requestParams?: RequestParams;
      }
    > = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: {
        petId: number;
        data: {
          /** Updated name of the pet */
          name?: string;
          /** Updated status of the pet */
          status?: string;
        };
        requestParams?: RequestParams;
      }) => {
        const { petId, data, requestParams = {} } = apiParams;

        return api.updatePetWithForm(petId!, data!, requestParams);
      },
    });
  }

  /**
   * No description
   *
   * @tags pet
   * @name DeletePet
   * @summary Deletes a pet
   * @request DELETE:/pet/{petId}
   * @secure
   */
  function useDeletePetMutation(
    mutationOptions: CustomMutationOptions<any, void, { petId: number; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { petId: number; requestParams?: RequestParams }) => {
        const { petId, requestParams = {} } = apiParams;

        return api.deletePet(petId!, requestParams);
      },
    });
  }

  return {
    useQueryUpdate: usePetApiQueryUpdate,
    useUploadFileMutation,
    useAddPetMutation,
    useUpdatePetMutation,
    useFindPetsByStatus,
    createFindPetsByStatusQueryKey,
    useFindPetsByTags,
    createFindPetsByTagsQueryKey,
    useGetPetById,
    createGetPetByIdQueryKey,
    useUpdatePetWithFormMutation,
    useDeletePetMutation,
  };
};

export function usePetApiQueryUpdate() {
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
}

export const createStoreApiQuery = (api: Store<unknown>) => {
  /**
   * No description
   *
   * @tags store
   * @name PlaceOrder
   * @summary Place an order for a pet
   * @request POST:/store/order
   */
  function usePlaceOrderMutation(
    mutationOptions: CustomMutationOptions<TypeOrder, void, { body: TypeOrder; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { body: TypeOrder; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        return api.placeOrder(body!, requestParams);
      },
    });
  }

  /**
   * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
   *
   * @tags store
   * @name GetOrderById
   * @summary Find purchase order by ID
   * @request GET:/store/order/{orderId}
   */
  function useGetOrderById(
    apiParams: { orderId: MaybeRef<number>; requestParams?: MaybeRef<RequestParams> },
    queryOptions: CustomQueryOptions<TypeOrder, void> = {},
  ) {
    const { orderId, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetOrderByIdQueryKey({ orderId, requestParams }) as QueryKey,
      queryFn: () => {
        return api.getOrderById(toValue(orderId)!, toValue(requestParams));
      },
    });
  }
  function createGetOrderByIdQueryKey(apiParams: {
    orderId: MaybeRef<number>;
    requestParams?: MaybeRef<RequestParams>;
  }) {
    const { orderId, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "store", "get", "/store/order/${orderId}", orderId, requestParams] as const;
  }

  /**
   * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
   *
   * @tags store
   * @name DeleteOrder
   * @summary Delete purchase order by ID
   * @request DELETE:/store/order/{orderId}
   */
  function useDeleteOrderMutation(
    mutationOptions: CustomMutationOptions<any, void, { orderId: number; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { orderId: number; requestParams?: RequestParams }) => {
        const { orderId, requestParams = {} } = apiParams;

        return api.deleteOrder(orderId!, requestParams);
      },
    });
  }

  /**
   * @description Returns a map of status codes to quantities
   *
   * @tags store
   * @name GetInventory
   * @summary Returns pet inventories by status
   * @request GET:/store/inventory
   * @secure
   */
  function useGetInventory(
    apiParams: { requestParams?: MaybeRef<RequestParams> },
    queryOptions: CustomQueryOptions<Record<string, number>, any> = {},
  ) {
    const { requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetInventoryQueryKey({ requestParams }) as QueryKey,
      queryFn: () => {
        return api.getInventory(toValue(requestParams));
      },
    });
  }
  function createGetInventoryQueryKey(apiParams: { requestParams?: MaybeRef<RequestParams> }) {
    const { requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "store", "get", "/store/inventory", requestParams] as const;
  }

  return {
    useQueryUpdate: useStoreApiQueryUpdate,
    usePlaceOrderMutation,
    useGetOrderById,
    createGetOrderByIdQueryKey,
    useDeleteOrderMutation,
    useGetInventory,
    createGetInventoryQueryKey,
  };
};

export function useStoreApiQueryUpdate() {
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
}

export const createUserApiQuery = (api: User<unknown>) => {
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */
  function useCreateUsersWithArrayInputMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypeUser[]; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { body: TypeUser[]; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        return api.createUsersWithArrayInput(body!, requestParams);
      },
    });
  }

  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */
  function useCreateUsersWithListInputMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypeUser[]; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { body: TypeUser[]; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        return api.createUsersWithListInput(body!, requestParams);
      },
    });
  }

  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */
  function useGetUserByName(
    apiParams: { username: MaybeRef<string>; requestParams?: MaybeRef<RequestParams> },
    queryOptions: CustomQueryOptions<TypeUser, void> = {},
  ) {
    const { username, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createGetUserByNameQueryKey({ username, requestParams }) as QueryKey,
      queryFn: () => {
        return api.getUserByName(toValue(username)!, toValue(requestParams));
      },
    });
  }
  function createGetUserByNameQueryKey(apiParams: {
    username: MaybeRef<string>;
    requestParams?: MaybeRef<RequestParams>;
  }) {
    const { username, requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "user", "get", "/user/${username}", username, requestParams] as const;
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   */
  function useUpdateUserMutation(
    mutationOptions: CustomMutationOptions<
      any,
      void,
      { username: string; body: TypeUser; requestParams?: RequestParams }
    > = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { username: string; body: TypeUser; requestParams?: RequestParams }) => {
        const { username, body, requestParams = {} } = apiParams;

        return api.updateUser(username!, body!, requestParams);
      },
    });
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */
  function useDeleteUserMutation(
    mutationOptions: CustomMutationOptions<any, void, { username: string; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { username: string; requestParams?: RequestParams }) => {
        const { username, requestParams = {} } = apiParams;

        return api.deleteUser(username!, requestParams);
      },
    });
  }

  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */
  function useLoginUser(
    apiParams: {
      query: MaybeRef<{
        /** The user name for login */
        username: string;
        /** The password for login in clear text */
        password: string;
      }>;
      requestParams?: MaybeRef<RequestParams>;
    },
    queryOptions: CustomQueryOptions<string, void> = {},
  ) {
    const { query, requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createLoginUserQueryKey({ query, requestParams }) as QueryKey,
      queryFn: () => {
        return api.loginUser(toValue(query)!, toValue(requestParams));
      },
    });
  }
  function createLoginUserQueryKey(apiParams: {
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
  }

  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */
  function useLogoutUser(
    apiParams: { requestParams?: MaybeRef<RequestParams> },
    queryOptions: CustomQueryOptions<any, void> = {},
  ) {
    const { requestParams = {} } = apiParams;
    return useQuery({
      ...queryOptions,
      queryKey: createLogoutUserQueryKey({ requestParams }) as QueryKey,
      queryFn: () => {
        return api.logoutUser(toValue(requestParams));
      },
    });
  }
  function createLogoutUserQueryKey(apiParams: { requestParams?: MaybeRef<RequestParams> }) {
    const { requestParams = {} } = apiParams;
    return ["swagger-typescript-api", "user", "get", "/user/logout", requestParams] as const;
  }

  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */
  function useCreateUserMutation(
    mutationOptions: CustomMutationOptions<any, void, { body: TypeUser; requestParams?: RequestParams }> = {},
  ) {
    return useMutation({
      ...mutationOptions,
      mutationFn: (apiParams: { body: TypeUser; requestParams?: RequestParams }) => {
        const { body, requestParams = {} } = apiParams;

        return api.createUser(body!, requestParams);
      },
    });
  }

  return {
    useQueryUpdate: useUserApiQueryUpdate,
    useCreateUsersWithArrayInputMutation,
    useCreateUsersWithListInputMutation,
    useGetUserByName,
    createGetUserByNameQueryKey,
    useUpdateUserMutation,
    useDeleteUserMutation,
    useLoginUser,
    createLoginUserQueryKey,
    useLogoutUser,
    createLogoutUserQueryKey,
    useCreateUserMutation,
  };
};

export function useUserApiQueryUpdate() {
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
}

export const createApiQuery = (modules: { pet: Pet; store: Store; user: User }) => {
  const { pet, store, user } = modules;

  return {
    pet: createPetApiQuery(pet),
    store: createStoreApiQuery(store),
    user: createUserApiQuery(user),
  };
};
