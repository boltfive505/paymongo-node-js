export interface WebhookParams {
  data: {
    attributes: {
      url: string;
      events: ('source.chargeable' | 'payment.paid' | 'payment.failed' | string)[];
    };
  };
}

interface WebhookItem {
  id: string;
  type: string;
  attributes: {
    livemode: boolean;
    secret_key: string;
    status: 'enabled' | 'disabled' | string;
    url: string;
    events: ('source.chargeable' | 'payment.paid' | 'payment.failed' | string)[];
    created_at: number;
    updated_at: number;
  };
}

export interface WebhookResponse {
  data: WebhookItem;
}

export interface WebhookList {
  data: WebhookItem[];
}
