import { AppContainer, Aside, Calculator } from "./styles/global";
import Display from "./components/Display";
import Form from "./components/Form";

const App = () => {
  return (
    <AppContainer>
      <Calculator>
        <h1>Simule sua Antecipação</h1>
        <Form />
      </Calculator>
      <Aside>
        <Display />
      </Aside>
    </AppContainer>
  );
};

export default App;
