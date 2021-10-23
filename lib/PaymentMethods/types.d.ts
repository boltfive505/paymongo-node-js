import { BillingDetails } from '../utils/types';
export { BillingDetails } from '../utils/types';
export interface PaymentMethodParams {
    data: {
        attributes: {
            type: 'card' | 'paymaya';
            details: {
                card_number: string;
                exp_month: number;
                exp_year: number;
                cvc: string;
            };
            billing?: BillingDetails;
        };
    };
}
export interface PaymentMethodResponse {
    data: {
        id: string;
        type: string;
        attributes: {
            livemode: boolean;
            type: string;
            billing?: BillingDetails;
            created_at: number;
            updated_at: number;
            details: {
                exp_month: number;
                exp_year: number;
                last4: string;
            };
        };
    };
}
//# sourceMappingURL=types.d.ts.map