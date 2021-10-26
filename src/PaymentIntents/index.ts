import { makeRequest } from '../utils/rest';
import { PaymentIntentParams, PaymentIntentResponse, PaymentIntentAttachParams } from './types';

class PaymentIntents {
  private secret = '';
  private path = '/payment_intents';

  constructor(secret: string) {
    this.secret = secret;
  }

  create(data: PaymentIntentParams) {
    return makeRequest<PaymentIntentParams, PaymentIntentResponse>(this.path, 'POST', this.secret, data);
  }

  retrieve(id: string) {
    if (!id || id.length === 0) throw new ReferenceError('PaymentIntent id is required');
    return makeRequest<object, PaymentIntentResponse>(`${this.path}/${id}`, 'GET', this.secret, {});
  }

  attach(paymentIntentId: string, data: PaymentIntentAttachParams) {
    if (!paymentIntentId || paymentIntentId.length === 0) throw new ReferenceError('PaymentIntent id is required');
    return makeRequest<PaymentIntentAttachParams, PaymentIntentResponse>(
      `${this.path}/${paymentIntentId}/attach`,
      'POST',
      this.secret,
      data,
    );
  }
}

export default PaymentIntents;
