import VibrantForm from "./";
import { mockFields } from "../../__mocks__/index";

describe("VibrantForm", () => {
  it("should render the empty component", () => {
    expect(VibrantForm).toMatchSnapshot();
  })

  it("should render the component with mock data", () => {
    const wrapper = <VibrantForm fields={mockFields} />;
    expect(wrapper).toMatchSnapshot();
  })
})
