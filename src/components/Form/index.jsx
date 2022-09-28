import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { inputCurrencyFormatter } from "../../utils/formatters";
import antecipationSchema from "../../utils/schemas/antecipationSchema";

const Form = () => {
  const [valueInput, setValueInput] = useState("0.00");
  const [installmentsInput, setInstallmentsInput] = useState("");
  const [mdrInput, setMdrInput] = useState("");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(antecipationSchema),
  });

  const fields = [
    {
      title: "Quatidade de parcelas *",
      name: "installments",
      type: "number",
      placeholder: "10",
    },
    {
      title: "Percentual de MDR *",
      name: "mdr",
      type: "number",
      placeholder: "4%",
    },
  ];
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Informe o valor da venda *</label>
        <input
          type="text"
          placeholder="R$ 1000,00"
          {...register("amount")}
          onChange={(e) => {
            inputCurrencyFormatter(e.target.value, setValueInput);
          }}
        />
        <span className="displayValue">{valueInput}</span>
        <span className="error-message">{errors["value"]?.message}</span>
      </div>
      {fields?.map((input, i) => (
        <div key={i}>
          <label>{input.title}</label>
          <input
            type={input.type}
            placeholder={input.placeholder}
            {...register(input.name)}
            onChange={() => console.log("mudou")}
          />
          <span>{errors[input.name]?.message}</span>
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
