import { CardType } from "../utils/types";
export interface PaymentIntentParams {
    data: {
        attributes: {
            amount: number;
            payment_method_allowed: Array<CardType>;
            payment_method_options?: {
                card: {
                    request_three_d_secure: "any";
                };
            };
            currency: string;
            description?: string;
            statement_descriptor?: string;
        };
    };
}
export interface PaymentIntentResponse {
    data: {
        id: string;
        type: string;
        attributes: {
            amount: number;
            currency: number;
            description: string;
            statement_descriptor: string;
            status: string;
            livemode: boolean;
            client_key: string;
            created_at: number;
            updated_at: number;
            last_payment_error: any;
            payment_method_allowed: Array<CardType>;
            payments: any;
            next_action: any;
            payment_method_options: {
                card: {
                    request_three_d_secure: "any";
                };
            };
        };
    };
}
export interface PaymentIntentAttachParams {
    data: {
        attributes: {
            payment_method: string;
            return_url: string;
        };
    };
}
//# sourceMappingURL=types.d.ts.map