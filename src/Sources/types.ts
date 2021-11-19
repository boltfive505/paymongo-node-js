import { BillingDetails } from "~utils/types";

export interface SourcesParams {
  data: {
    attributes: {
      type: "gcash" | "grab_pay" | string;
      amount: number;
      currency: string;
      redirect: { success: string; failed: string };
      billing?: BillingDetails;
    };
  };
}

export interface SourcesResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      amount: number;
      billing?: BillingDetails;
      currency: string;
      description: string;
      livemode: boolean;
      redirect: {
        checkout_url: string;
        failed: string;
        success: string;
      };
      status:
        | "pending"
        | "chargeable"
        | "cancelled"
        | "expired"
        | "paid"
        | string;
      statement_descriptor: string;
      type: "gcash" | "grab_pay" | string;
      created_at: number;
      updated_at: number;
    };
  };
}
