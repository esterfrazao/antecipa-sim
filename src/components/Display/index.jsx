import { useSimulator } from "../../providers/antecipation";
import { currencyFormatter } from "../../utils/formatters";
import { Message, Result } from "./style";

const Display = () => {
  const { results, message } = useSimulator();

  return (
    <>
      <h2>Você Receberá:</h2>
      {message ? (
        <Message>{message}</Message>
      ) : (
        <>
          <Result>
            <h3>Amanhã:</h3>
            <p>{currencyFormatter.format(results["1"])}</p>
          </Result>
          <Result>
            <h3>Em 15 dias:</h3>
            <p>{currencyFormatter.format(results["15"])}</p>
          </Result>
          <Result>
            <h3>Em 30 dias:</h3>
            <p>{currencyFormatter.format(results["30"])}</p>
          </Result>
          <Result>
            <h3>Em 90 dias:</h3>
            <p>{currencyFormatter.format(results["90"])}</p>
          </Result>
        </>
      )}
    </>
  );
};

export default Display;
