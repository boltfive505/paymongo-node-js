import { makeRequest } from '../utils/rest';
class PaymentIntents {
    constructor(secret) {
        this.secret = '';
        this.path = '/payment_intents';
        this.secret = secret;
    }
    create(data) {
        return makeRequest(this.path, 'POST', this.secret, data);
    }
    retrieve(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('PaymentIntent id is required');
        return makeRequest(`${this.path}/${id}`, 'GET', this.secret, {});
    }
    attach(paymentMethodId, data) {
        if (!paymentMethodId || paymentMethodId.length === 0)
            throw new ReferenceError('PaymentMethod id is required');
        return makeRequest(`${this.path}/${paymentMethodId}/attach`, 'POST', this.secret, data);
    }
}
export default PaymentIntents;
//# sourceMappingURL=index.js.map