import { useState } from "react";
import FormSteps from "./components/form-steps/FormSteps";
import Steps from "./components/Steps";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  const [stepIndex, setStepIndex] = useState(1);

  return (
    <section className={`container ${stepIndex === 4 ? "grid" : "grid-2"}`}>
      {stepIndex < 3 && <FormSteps stepIndex={stepIndex} />}
      <Steps stepIndex={stepIndex} />
    </section>
  );
};

export default App;
