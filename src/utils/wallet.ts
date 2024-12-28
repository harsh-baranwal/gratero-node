import { AxiosInstance } from "axios";

/**
 * Fetch wallet balance from the API.
 * @param api - Axios instance for making API calls.
 * @returns The wallet balance.
 */

export const wallet = async (api: AxiosInstance): Promise<any> => {
  try {
    const response = await api.get("/wallet");
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response?.data
    }
    throw new Error(error);
  }
};
