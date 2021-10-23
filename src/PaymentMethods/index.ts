import { makeRequest } from "../utils/fetch";
import { PaymentMethodParams, PaymentMethodResponse } from "./types";

class PaymentMethods {
  private secret = "";
  private path = "/payment_methods";

  constructor(secret: string) {
    this.secret = secret;
  }

  create(data: PaymentMethodParams) {
    return makeRequest<PaymentMethodParams, PaymentMethodResponse>(
      this.path,
      "POST",
      this.secret,
      data
    );
  }

  retrieve(id: string) {
    if (!id || id.length === 0) throw "PaymentMethod id is required";
    return makeRequest<Object, PaymentMethodResponse>(
      `${this.path}/${id}`,
      "GET",
      this.secret,
      {}
    );
  }
}

export default PaymentMethods;
