import Form from "./containers/Form";
import "./styles.css";
import { mockFields } from "./__mocks__/index";

export default function App() {
  return (
    <div className="App">
      <h1>Vibrant Form Demo</h1>
      <Form fieldsData={mockFields} />
    </div>
  );
}
