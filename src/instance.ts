import axios, { AxiosInstance } from "axios";
import { Order } from "./utils/order";
import { Warehouse } from "./utils/warehouse";
import { wallet } from "./utils/wallet";
import { calculateRate, CalculateRateOptions } from "./utils/get-rate";

interface GrateroConfig {
  api_key: string;
  secret_key: string;
  environment: "test" | "live";
}

export class Instance {
  public order: Order;
  public warehouse: Warehouse;
  private api: AxiosInstance;

  constructor(options: GrateroConfig) {
    const baseURL =
      options.environment === "live"
        ? "https://api.gratero.com/v1"
        : "https://sandbox.gratero.com/v1";

    this.api = axios.create({
      baseURL: baseURL,
      headers: {
        "x-api-key": options.api_key,
        "x-secret-key": options.secret_key,
        "origin": "node"
      },
    });

    this.order = new Order(this.api);
    this.warehouse = new Warehouse(this.api);
  }

  public async wallet(): Promise<any> {
    return wallet(this.api);
  }
  public async calculateRate(options: CalculateRateOptions): Promise<any> {
    return await calculateRate(this.api, options);
  }
}
