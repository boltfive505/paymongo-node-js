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
