export interface PaymentIntentParams {
  data: {
    attributes: {
      amount: number;
      payment_method_allowed: ('card' | 'paymaya')[];
      payment_method_options?: { card: { request_three_d_secure: 'any' } };
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
      status: string;
      livemode: boolean;
      client_key: string;
      created_at: number;
      updated_at: number;
      last_payment_error: any; // to be set - dictionary
      payment_method_allowed: ('card' | 'paymaya')[];
      payments: any; // to be set - array
      next_action: any; // to be set - dictionary
      payment_method_options: {
        card: {
          request_three_d_secure: 'any';
        };
      };
    };
  };
}

export interface PaymentIntentAttachParams {
  data: {
    attributes: { payment_method: string; return_url: string };
  };
}
