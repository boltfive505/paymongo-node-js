import { PaymentIntentParams, PaymentIntentResponse, PaymentIntentAttachParams } from "./types";
declare class PaymentIntents {
    private secret;
    private path;
    constructor(secret: string);
    create(data: PaymentIntentParams): Promise<PaymentIntentResponse>;
    retrieve(id: string): Promise<PaymentIntentResponse>;
    attach(paymentMethodId: string, data: PaymentIntentAttachParams): Promise<PaymentIntentResponse>;
}
export default PaymentIntents;
//# sourceMappingURL=payment-intents.d.ts.map