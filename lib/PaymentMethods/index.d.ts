import { PaymentMethodParams, PaymentMethodResponse } from './types';
declare class PaymentMethods {
    private secret;
    private path;
    constructor(secret: string);
    create(data: PaymentMethodParams): Promise<PaymentMethodResponse>;
    retrieve(id: string): Promise<PaymentMethodResponse>;
}
export default PaymentMethods;
//# sourceMappingURL=index.d.ts.map