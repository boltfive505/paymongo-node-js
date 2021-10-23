import { PaymentsParams, PaymentsResponse, PaymentList } from './types';
declare class Payments {
    private secret;
    private path;
    constructor(secret: string);
    create: (data: PaymentsParams) => Promise<PaymentsResponse>;
    retrieve(id: string): Promise<PaymentResponse>;
    listAll(before?: string, after?: string, limit?: number): Promise<PaymentList>;
}
export default Payments;
//# sourceMappingURL=index.d.ts.map