import { AxiosInstance } from "axios";

export interface CalculateRateOptions {
  shipment_type: "forward" | "reverse";
  payment_mode: "prepaid" | "cod";
  pickup: number;
  delivery: number;
  length: number;
  breadth: number;
  height: number;
  actual_weight: number;
  amount: number;
}

export const calculateRate = async (api: AxiosInstance, options: CalculateRateOptions): Promise<any> => {
  try {
    const response = await api.post("/calculate-rate", options);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw error.response?.data
    }
    throw new Error(error);
  }
};
