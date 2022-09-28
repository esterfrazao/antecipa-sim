import "./App.css";
import Form from "./components/Form";

const App = () => {

  return (
    <div className="app">
      <main className="calculator">
        <h1>Simule sua Antecipação</h1>
        <Form />
      </main>
      <aside className="results"></aside>
    </div>
  );
};

export default App;
