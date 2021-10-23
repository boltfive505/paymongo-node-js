import { BillingDetails } from '../utils/types';

export interface SourcesParams {
  data: {
    attributes: {
      type: 'gcash' | 'grab_pay';
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
      status: string;
      statement_descriptor: string;
      type: 'gcash' | 'grab_pay';
      created_at: number;
      updated_at: number;
    };
  };
}
