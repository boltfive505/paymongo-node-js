import { makeRequest } from '../utils/rest';
import { WebhookParams, WebhookResponse } from './types';

class Webhooks {
  private secret = '';
  private path = '/webhooks';

  constructor(secret: string) {
    this.secret = secret;
  }

  createWebhook(data: WebhookParams) {
    return makeRequest<WebhookParams, WebhookResponse>(this.path, 'POST', this.secret, data);
  }

  retrieveWebhook(id: string) {
    if (!id || id.length === 0) throw new ReferenceError('Webhooks id is required');
    return makeRequest<object, WebhookResponse>(`${this.path}/${id}`, 'GET', this.secret, {});
  }

  enableWebhook(id: string) {
    if (!id || id.length === 0) throw new ReferenceError('Webhooks id is required');
    return makeRequest<object, WebhookResponse>(`${this.path}/${id}/enable`, 'POST', this.secret, {});
  }

  disableWebhook(id: string) {
    if (!id || id.length === 0) throw new ReferenceError('Webhooks id is required');
    return makeRequest<object, WebhookResponse>(`${this.path}/${id}/disable`, 'POST', this.secret, {});
  }

  updateWebhook(id: string, data: WebhookParams) {
    if (!id || id.length === 0) throw new ReferenceError('Webhooks id is required');
    return makeRequest<WebhookParams, WebhookResponse>(`${this.path}/${id}`, 'PUT', this.secret, data);
  }

  listAllWebhooks() {
    return makeRequest<object, WebhookResponse>(this.path, 'GET', this.secret, {});
  }
}

export default Webhooks;
