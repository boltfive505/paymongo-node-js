import Paymongo from "./lib";

const Tester = () => {
  const secret = "sk_test_QvaEW2cTWNNPsyhuxnDie68b";
  const paymongo = new Paymongo(secret);

  paymongo.paymentMethods
    .create({
      data: {
        attributes: {
          type: "card",
          details: {
            card_number: "4343434343434345",
            exp_month: 1,
            exp_year: 23,
            cvc: "111",
          },
          metadata: {
            joff: "pogi",
          },
        },
      },
    })
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
};

export default Tester;
