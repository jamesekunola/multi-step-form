import FormSteps from "./components/form-steps/FormSteps";
import Steps from "./components/Steps";
import { useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const stepIndex = useSelector((state) => state.steps);

  return (
    <section className="container">
      <FormSteps stepIndex={stepIndex} />
      <Steps stepIndex={stepIndex} />
    </section>
  );
};

export default App;
