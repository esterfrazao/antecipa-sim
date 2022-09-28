import * as yup from "yup";

export default yup.object().shape({
  amount: yup
    .string()
    .required("Campo Obrigatório")
    .transform((value) => Number(value.slice(0, -2) + "." + value.slice(-2))),
  installments: yup
    .number()
    .required("Campo Obrigatório")
    .max(12, "O máximo de parcelas aceitas é 12"),
  mdr: yup
    .string()
    .required("Campo Obrigatório")
    .transform((value) => parseInt(value)),
});
