import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { inputCurrencyFormatter } from "../../utils/formatters";
import antecipationSchema from "../../utils/schemas/antecipationSchema";
import { useSimulator } from "../../providers/antecipation";

const Form = () => {
  const [valueInput, setValueInput] = useState("0.00");
  const [mdrInput, setMdrInput] = useState("%");

  const { simulate } = useSimulator();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(antecipationSchema),
  });

  const onSubmit = (data) => simulate(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
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
        <span className="error-message">{errors["amount"]?.message}</span>
      </fieldset>
      <fieldset>
        <label>Quatidade de parcelas *</label>
        <input type="number" placeholder="10" {...register("installments")} />
        <span className="error-message">{errors["installments"]?.message}</span>
      </fieldset>
      <fieldset>
        <label>Percentual de MDR *</label>
        <input
          type="number"
          placeholder="4%"
          {...register("mdr")}
          onChange={(e) => setMdrInput(e.target.value + "%")}
        />
        <span className="displayValue">{mdrInput}</span>
        <span>{errors["mdr"]?.message}</span>
      </fieldset>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
