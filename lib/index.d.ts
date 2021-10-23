import "./polyfill";
import PaymentMethods from "./PaymentMethods";
import PaymentIntents from "./PaymentIntents";
import Payments from "./Payments";
import Sources from "./Sources";
import Webhooks from "./Webhooks";
declare class Paymongo {
    paymentMethods: PaymentMethods;
    paymentIntents: PaymentIntents;
    payments: Payments;
    sources: Sources;
    webhooks: Webhooks;
    constructor(secret: string);
}
export default Paymongo;
//# sourceMappingURL=index.d.ts.map