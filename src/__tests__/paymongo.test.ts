import Paymongo from '..';

const paymongoTest = () => {
  const paymongo = new Paymongo('sk_test_QvaEW2cTWNNPsyhuxnDie68b');
  paymongo.paymentMethods.create({
    data: {
      attributes: {
        type: 'card',
        details: {
          card_number: '4343434343434345',
          exp_month: 1,
          exp_year: 23,
          cvc: '111',
        },
      },
    },
  });
  // .then((result) => console.log(result))
  // .catch((error) => console.error(error));
};

test('Paymongo test', () => {
  paymongoTest();
});
