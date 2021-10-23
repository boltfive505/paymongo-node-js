import { makeRequest } from '../utils/rest';
class PaymentMethods {
    constructor(secret) {
        this.secret = '';
        this.path = '/payment_methods';
        this.secret = secret;
    }
    create(data) {
        return makeRequest(this.path, 'POST', this.secret, data);
    }
    retrieve(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('PaymentMethod id is required');
        return makeRequest(`${this.path}/${id}`, 'GET', this.secret, {});
    }
}
export default PaymentMethods;
//# sourceMappingURL=index.js.map