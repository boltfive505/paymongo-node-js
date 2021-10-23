import { makeRequest } from '../utils/rest';
class Payments {
    constructor(secret) {
        this.secret = '';
        this.path = '/payments';
        this.create = (data) => {
            return makeRequest(this.path, 'POST', this.secret, data);
        };
        this.secret = secret;
    }
    retrieve(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('Payment id is required');
        return makeRequest(`${this.path}/${id}`, 'GET', this.secret, {});
    }
    listAll(before, after, limit = 10) {
        return makeRequest(`${this.path}?before=${before}&after=${after}&limit=${limit}`, 'GET', this.secret, {});
    }
}
export default Payments;
//# sourceMappingURL=index.js.map