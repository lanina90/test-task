import { $host } from "./index";
import {ApiResponse} from "../types/Users";

export const getUsers = async ({page} : {page: number}) : Promise<ApiResponse> => {
  try {
    const { data } = await $host.get('users', {
      params: {
        page: page,
        count: 6
      }
    });
    return data;
  } catch (e) {
    throw (e)
  }
};


