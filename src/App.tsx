import Form from "./containers/Form";
import { FormPropsType } from "./containers/Form/types";
import "./styles.css";
import { mockFields } from "./__mocks__/index";

export default function App() {
  const formProps: FormPropsType = { fieldsData: mockFields };
  return (
    <div className="App">
      <h1>Vibrant Form Demo</h1>
      <Form {...formProps} />
    </div>
  );
}
