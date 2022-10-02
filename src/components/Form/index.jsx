import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { inputCurrencyFormatter } from "../../utils/formatters";
import antecipationSchema from "../../utils/schemas/antecipationSchema";
import { useSimulator } from "../../providers/antecipation";
import { Input, MaskedInput, StyledForm } from "./style";

const Form = () => {
  const [valueInput, setValueInput] = useState("");
  const [mdrInput, setMdrInput] = useState("");

  const { simulate } = useSimulator();

  useEffect(() => {
    if (mdrInput === "%") {
      setMdrInput("");
    }
  }, [mdrInput]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(antecipationSchema),
  });

  const onSubmit = (data) => simulate(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Informe o valor da venda *</label>
        <MaskedInput>
          <Input
            type="text"
            placeholder="R$ 1000,00"
            {...register("amount")}
            onChange={(e) => {
              inputCurrencyFormatter(e.target.value, setValueInput);
            }}
          />
          <span>{valueInput}</span>
        </MaskedInput>
        <span className="error-message">{errors.amount?.message}</span>
      </fieldset>
      <fieldset>
        <label>Quatidade de parcelas *</label>
        <Input type="number" placeholder="10" {...register("installments")} />
        <span className="error-message">{errors.installments?.message}</span>
      </fieldset>
      <fieldset>
        <label>Percentual de MDR *</label>
        <MaskedInput>
          <Input
            type="number"
            placeholder="4%"
            {...register("mdr")}
            onChange={(e) => setMdrInput(e.target.value + "%")}
          />
          <span>{mdrInput}</span>
        </MaskedInput>
        <span className="error-message">{errors.mdr?.message}</span>
      </fieldset>
      <button type="submit">Enviar</button>
    </StyledForm>
  );
};

export default Form;
