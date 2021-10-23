export interface BillingDetails {
    address?: {
        line1: string;
        line2: string;
        city: string;
        state: string;
        postal_code: string;
        country: string;
    };
    name: string;
    email: string;
    phone: string;
}
export declare enum CardType {
    card = "card",
    paymaya = "paymaya"
}
export declare enum EWalletType {
    gcash = "gcash",
    grab_pay = "grab_pay"
}
//# sourceMappingURL=types.d.ts.map