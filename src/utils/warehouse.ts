import { AxiosInstance } from "axios";

interface WarehouseFetchOptions {
  id: number;
}

export class Warehouse {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async fetch(options: WarehouseFetchOptions): Promise<any> {
    try {
      const response = await this.api.get(`/get-warehouse/${options.id}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data;
    }
  }
}
