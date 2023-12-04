import { $host } from "./index";

export const getUsers = async ({page} : {page: number}) => {
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


