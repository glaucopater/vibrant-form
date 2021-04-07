import VibrantForm from "./components/Vibrant";
import "./styles.css";
import { mockFields } from "./__mocks__/index";

export default function App() {
  return (
    <div className="App">
      <h1>Vibrant Form Demo</h1>
      <VibrantForm fields={mockFields} />
    </div>
  );
}
