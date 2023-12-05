import { $host } from "./index";
import {ApiResponse, UserData} from "../types/Users";


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


export const getPositions = async () => {
  try {
    const { data } = await $host.get('positions');
    return data;
  } catch (e) {
    throw (e)
  }
};


export const postUser = async (userData: UserData) => {
  try {
    const { data } = await $host.get('token');
    const formData = new FormData();
    formData.append('name', userData.name);
    formData.append('email', userData.email);
    formData.append('phone', userData.phone);
    formData.append('position_id', userData.position_id.toString());
    formData.append('photo', userData.photo);

    const response = await $host.post('users', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Token': data.token
      },
    });

    if (response.status === 201) {
      return { success: true };
    } else {
      const responseData = response.data;
      const message = responseData.message || 'Sending error';
      return { success: false, message };
    }
  } catch (e: any) {
    const errorMessage = e.response?.data?.message || 'Unknown error';
    return { success: false, message: errorMessage };
  }
};
