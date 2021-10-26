export interface PaymentIntentParams {
  data: {
    attributes: {
      amount: number;
      payment_method_allowed: ('card' | 'paymaya' | string)[];
      payment_method_options?: { card: { request_three_d_secure: 'any' | string } };
      currency: string;
      description?: string;
      statement_descriptor?: string;
    };
  };
}

export interface PaymentIntentResponse {
  data: {
    id: string;
    type: string;
    attributes: {
      amount: number;
      currency: number;
      description: string;
      statement_descriptor: string;
      status: 'awaiting_payment_method' | 'awaiting_next_action' | 'processing ' | 'succeeded' | string;
      livemode: boolean;
      client_key: string;
      created_at: number;
      updated_at: number;
      last_payment_error: any; // to be set - dictionary
      payment_method_allowed: ('card' | 'paymaya' | string)[];
      payments: any; // to be set - array
      next_action?: {
        type: 'redirect' | string;
        redirect: {
          return_url?: string;
          url: string;
        };
      }; // to be set - dictionary
      payment_method_options: {
        card: {
          request_three_d_secure: 'any' | 'automatic' | string;
        };
      };
    };
  };
}

export interface PaymentIntentAttachParams {
  data: {
    attributes: { payment_method: string; return_url?: string };
  };
}
