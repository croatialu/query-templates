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

import { TypeUser } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class User<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithArrayInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithArray
   */
  createUsersWithArrayInput = (body: TypeUser[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/createWithArray`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name CreateUsersWithListInput
   * @summary Creates list of users with given input array
   * @request POST:/user/createWithList
   */
  createUsersWithListInput = (body: TypeUser[], params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/createWithList`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name GetUserByName
   * @summary Get user by user name
   * @request GET:/user/{username}
   */
  getUserByName = (username: string, params: RequestParams = {}) =>
    this.request<TypeUser, void>({
      path: `/user/${username}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name UpdateUser
   * @summary Updated user
   * @request PUT:/user/{username}
   */
  updateUser = (username: string, body: TypeUser, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/${username}`,
      method: "PUT",
      body: body,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name DeleteUser
   * @summary Delete user
   * @request DELETE:/user/{username}
   */
  deleteUser = (username: string, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/${username}`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LoginUser
   * @summary Logs user into the system
   * @request GET:/user/login
   */
  loginUser = (
    query: {
      /** The user name for login */
      username: string;
      /** The password for login in clear text */
      password: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<string, void>({
      path: `/user/login`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags user
   * @name LogoutUser
   * @summary Logs out current logged in user session
   * @request GET:/user/logout
   */
  logoutUser = (params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user/logout`,
      method: "GET",
      ...params,
    });
  /**
   * @description This can only be done by the logged in user.
   *
   * @tags user
   * @name CreateUser
   * @summary Create user
   * @request POST:/user
   */
  createUser = (body: TypeUser, params: RequestParams = {}) =>
    this.request<any, void>({
      path: `/user`,
      method: "POST",
      body: body,
      type: ContentType.Json,
      ...params,
    });
}
