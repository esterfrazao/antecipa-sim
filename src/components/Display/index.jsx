import { useSimulator } from "../../providers/antecipation";

const Display = () => {
  const { results, message } = useSimulator();

  return (
    <>
      <h2>Você Receberá:</h2>
      {message ? (
        <h3>{message}</h3>
      ) : (
        <>
          <div>
            <h3>Amanhã</h3>
            <p>{results["1"]}</p>
          </div>
          <div>
            <h3>Em 15 dias:</h3>
            <p>{results["15"]}</p>
          </div>
          <div>
            <h3>Em 30 dias:</h3>
            <p>{results["30"]}</p>
          </div>
          <div>
            <h3>Em 90 dias:</h3>
            <p>{results["90"]}</p>
          </div>
        </>
      )}
    </>
  );
};

export default Display;
