import Form from "./containers/Form";
import { FormPropsType } from "./types";
import { mockFields } from "./__mocks__/index";
import { dictionary } from "./dictionary";
import "./styles.css";

export default function App() {
  const formProps: FormPropsType = { fieldsData: mockFields };
  return (
    <div className="App">
      <h1 className="appTitle">{dictionary.appTitle}</h1>
      <Form {...formProps} />
    </div>
  );
}
