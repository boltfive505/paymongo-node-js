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

export enum CardType {
  card = "card",
  paymaya = "paymaya",
}

export enum EWalletType {
  gcash = "gcash",
  grab_pay = "grab_pay",
}
