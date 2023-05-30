import * as Yup from "yup";

export const creditCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Número de cartão inválido")
    .required("Campo obrigatório"),
  expire: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, "Data de validade inválida")
    .required("Campo obrigatório"),
  cvc: Yup.string()
    .matches(/^\d{3}$/, "Código de segurança inválido")
    .required("Campo obrigatório"),
});
