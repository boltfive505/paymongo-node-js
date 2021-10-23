import { makeRequest } from "../utils/fetch";
import {
  PaymentIntentParams,
  PaymentIntentResponse,
  PaymentIntentAttachParams,
} from "./types";

class PaymentIntents {
  private secret = "";
  private path = "/payment_intents";

  constructor(secret: string) {
    this.secret = secret;
  }

  create(data: PaymentIntentParams) {
    return makeRequest<PaymentIntentParams, PaymentIntentResponse>(
      this.path,
      "POST",
      this.secret,
      data
    );
  }

  retrieve(id: string) {
    if (!id || id.length === 0) throw "PaymentIntent id is required";
    return makeRequest<Object, PaymentIntentResponse>(
      `${this.path}/${id}`,
      "GET",
      this.secret,
      {}
    );
  }

  attach(paymentMethodId: string, data: PaymentIntentAttachParams) {
    if (!paymentMethodId || paymentMethodId.length === 0)
      throw "PaymentMethod id is required";
    return makeRequest<PaymentIntentAttachParams, PaymentIntentResponse>(
      `${this.path}/${paymentMethodId}/attach`,
      "POST",
      this.secret,
      data
    );
  }
}

export default PaymentIntents;
