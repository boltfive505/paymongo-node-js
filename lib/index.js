import './polyfill';
import PaymentMethods from './PaymentMethods';
import PaymentIntents from './PaymentIntents';
import Payments from './Payments';
import Sources from './Sources';
import Webhooks from './Webhooks';
class Paymongo {
    constructor(secret) {
        if (!secret || secret.length === 0)
            throw new ReferenceError('API key is required');
        this.paymentMethods = new PaymentMethods(secret);
        this.paymentIntents = new PaymentIntents(secret);
        this.payments = new Payments(secret);
        this.sources = new Sources(secret);
        this.webhooks = new Webhooks(secret);
    }
}
export default Paymongo;
//# sourceMappingURL=index.js.map