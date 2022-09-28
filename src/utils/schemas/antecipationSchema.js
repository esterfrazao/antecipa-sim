import * as yup from "yup";

export default yup.object().shape({
  amount: yup
    .string()
    .required("required")
    .transform((value) =>
      console.log(Number(value.slice(0, -2) + "." + value.slice(-2)))
    ),
  installments: yup.string(),
  mdr: yup.string(),
});
