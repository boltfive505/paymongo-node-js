import { makeRequest } from '../utils/rest';
class Sources {
    constructor(secret) {
        this.secret = '';
        this.path = '/sources';
        this.secret = secret;
    }
    create(data) {
        return makeRequest(this.path, 'POST', this.secret, data);
    }
    retrieve(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('Sources id is required');
        return makeRequest(`${this.path}/${id}`, 'GET', this.secret, {});
    }
}
export default Sources;
//# sourceMappingURL=index.js.map