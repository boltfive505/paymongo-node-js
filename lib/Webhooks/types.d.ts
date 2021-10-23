declare enum WebhookEvent {
    "source.chargeable" = "source.chargeable",
    "payment.paid" = "payment.paid",
    "payment.failed" = "payment.failed"
}
export interface WebhookParams {
    data: {
        attributes: {
            url: string;
            events: Array<WebhookEvent>;
        };
    };
}
interface WebhookItem {
    id: string;
    type: string;
    attributes: {
        livemode: boolean;
        secret_key: string;
        status: string;
        url: string;
        events: Array<WebhookEvent>;
        created_at: number;
        updated_at: number;
    };
}
export interface WebhookResponse {
    data: WebhookItem;
}
export interface WebhookList {
    data: Array<WebhookItem>;
}
export {};
//# sourceMappingURL=types.d.ts.map