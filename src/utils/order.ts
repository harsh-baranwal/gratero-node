import { AxiosInstance } from "axios";

interface OrderCreateOptions {
  order_id: string;
  order_date: string;
  order_type: "forward" | "reverse";

  name: string;
  mobile: string;
  alt_mobile?: string;
  company_name?: string;
  gst_number?: string;
  email?: string;
  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string;
  pincode: number;

  products: ProductOptions[];
  package_length: number;
  package_breadth: number;
  package_height: number;
  package_weight: number;

  payment_mode: "prepaid" | "cod";
  discount?: number;
  shipping_charge?: number;
  transaction_charge?: number;
  giftwrap_charge?: number;
  total_amount: number;

  logistic_id: number;
  warehouse_id: number;
  ewaybill_no?: string;
  delivery_remarks?: string;
}

interface ProductOptions {
  product_name: string;
  price: number;
  quantity: number;
  sku?: string;
  discount?: number;
  tax?: number;
}

interface OrderTrackOptions {
  awb: string;
}

export class Order {
  private api: AxiosInstance;

  constructor(api: AxiosInstance) {
    this.api = api;
  }

  public async create(options: OrderCreateOptions): Promise<any> {
    try {
      const response = await this.api.post("/create-order", options);
      return response.data;
    } catch (error: any) {
      throw error.response.data;
    }
  }

  public async fetch(options: OrderTrackOptions): Promise<any> {
    try {
      const response = await this.api.get(`/get-order/${options.awb}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data;
    }
  }

  public async track(options: OrderTrackOptions): Promise<any> {
    try {
      const response = await this.api.get(`/track-order/${options.awb}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data;
    }
  }

  public async cancel(options: OrderTrackOptions): Promise<any> {
    try {
      const response = await this.api.patch(`/cancel-order/${options.awb}`);
      return response.data;
    } catch (error: any) {
      throw error.response?.data;
    }
  }
}
