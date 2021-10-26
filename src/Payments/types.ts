import { BillingDetails } from '../utils/types';

interface PaymentSource {
  id: string;
  type: 'gcash' | 'grab_pay' | string;
}

export interface PaymentsParams {
  data: {
    attributes: {
      amount: number;
      currency: string;
      description?: string;
      statement_descriptor?: string;
      source: PaymentSource;
    };
  };
}

interface PaymentItem {
  id: string;
  type: string;
  attributes: {
    access_url?: any;
    amount: number;
    balance_transaction_id: string;
    billing?: BillingDetails;
    currency: string;
    description?: string;
    disputed: boolean;
    external_reference_number?: any;
    fee: number;
    livemode: boolean;
    net_amount: number;
    origin: string;
    payment_intent_id?: any;
    payout?: any;
    source: PaymentSource;
    statement_descriptor?: string;
    status: 'pending' | 'failed' | 'paid' | string;
    tax_amount?: any;
    refunds?: any;
    taxes?: any;
    available_at: number;
    created_at: number;
    paid_at: number;
    updated_at: number;
  };
}

export interface PaymentsResponse {
  data: PaymentItem;
}

export interface PaymentList {
  has_more: boolean;
  data: PaymentItem[];
}
