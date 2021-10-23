import { WebhookParams, WebhookResponse } from './types';
declare class Webhooks {
    private secret;
    private path;
    constructor(secret: string);
    createWebhook(data: WebhookParams): Promise<WebhookResponse>;
    retrieveWebhook(id: string): Promise<WebhookResponse>;
    enableWebhook(id: string): Promise<WebhookResponse>;
    disableWebhook(id: string): Promise<WebhookResponse>;
    updateWebhook(id: string, data: WebhookParams): Promise<WebhookResponse>;
    listAllWebhooks(): Promise<WebhookResponse>;
}
export default Webhooks;
//# sourceMappingURL=index.d.ts.map