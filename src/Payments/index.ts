import { makeRequest } from "../utils/fetch";
import { PaymentsParams, PaymentsResponse, PaymentList } from "./types";

class Payments {
  private secret = "";
  private path = "/payments";

  constructor(secret: string) {
    this.secret = secret;
  }

  create = (data: PaymentsParams) => {
    return makeRequest<PaymentsParams, PaymentsResponse>(
      this.path,
      "POST",
      this.secret,
      data
    );
  };

  retrieve(id: string) {
    if (!id || id.length === 0) throw "Payment id is required";
    return makeRequest<Object, PaymentResponse>(
      `${this.path}/${id}`,
      "GET",
      this.secret,
      {}
    );
  }

  listAll(before?: string, after?: string, limit: number = 10) {
    return makeRequest<Object, PaymentList>(
      `${this.path}?before=${before}&after=${after}&limit=${limit}`,
      "GET",
      this.secret,
      {}
    );
  }
}

export default Payments;
