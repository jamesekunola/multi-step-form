import FormSteps from "./components/form-steps/FormSteps";
import Steps from "./components/Steps";
import { useSelector } from "react-redux";

const App = () => {
  const stepIndex = useSelector((state) => state.steps);

  return (
    <section className={`container ${stepIndex === 4 ? "grid" : "grid-2"}`}>
      <FormSteps stepIndex={stepIndex} />
      <Steps stepIndex={stepIndex} />
    </section>
  );
};

export default App;
