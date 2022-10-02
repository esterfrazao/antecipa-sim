import * as yup from "yup";

export default yup.object().shape({
  amount: yup
    .number()
    .typeError("Preencha com números!")
    .transform((value) =>
      Number(`${value}`.slice(0, -2) + "." + `${value}`.slice(-2))
    )
    .min(1000, "Valor deve ser superior a mil"),
  installments: yup
    .number()
    .typeError("Preencha com números!")
    .max(12, "O máximo de parcelas aceitas é 12"),
  mdr: yup
    .number()
    .typeError("Preencha com números!")
    .min(0, "Porcentagem inválida")
    .max(100, "Não deve passar de 100%"),
});
