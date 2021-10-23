import { makeRequest } from '../utils/rest';
import { PaymentsParams, PaymentsResponse, PaymentList } from './types';

class Payments {
  private secret = '';
  private path = '/payments';

  constructor(secret: string) {
    this.secret = secret;
  }

  create = (data: PaymentsParams) => {
    return makeRequest<PaymentsParams, PaymentsResponse>(this.path, 'POST', this.secret, data);
  };

  retrieve(id: string) {
    if (!id || id.length === 0) throw new ReferenceError('Payment id is required');
    return makeRequest<object, PaymentResponse>(`${this.path}/${id}`, 'GET', this.secret, {});
  }

  listAll(before?: string, after?: string, limit: number = 10) {
    return makeRequest<object, PaymentList>(
      `${this.path}?before=${before}&after=${after}&limit=${limit}`,
      'GET',
      this.secret,
      {},
    );
  }
}

export default Payments;
