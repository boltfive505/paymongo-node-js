import { makeRequest } from '../utils/rest';
class Webhooks {
    constructor(secret) {
        this.secret = '';
        this.path = '/webhooks';
        this.secret = secret;
    }
    createWebhook(data) {
        return makeRequest(this.path, 'POST', this.secret, data);
    }
    retrieveWebhook(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('Webhooks id is required');
        return makeRequest(`${this.path}/${id}`, 'GET', this.secret, {});
    }
    enableWebhook(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('Webhooks id is required');
        return makeRequest(`${this.path}/${id}/enable`, 'POST', this.secret, {});
    }
    disableWebhook(id) {
        if (!id || id.length === 0)
            throw new ReferenceError('Webhooks id is required');
        return makeRequest(`${this.path}/${id}/disable`, 'POST', this.secret, {});
    }
    updateWebhook(id, data) {
        if (!id || id.length === 0)
            throw new ReferenceError('Webhooks id is required');
        return makeRequest(`${this.path}/${id}`, 'PUT', this.secret, data);
    }
    listAllWebhooks() {
        return makeRequest(this.path, 'GET', this.secret, {});
    }
}
export default Webhooks;
//# sourceMappingURL=index.js.map