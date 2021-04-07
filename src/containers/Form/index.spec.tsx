import Form from ".";
import { mockFields } from "../../__mocks__/index";

describe("VibrantForm", () => {
  it("should render the empty component", () => {
    expect(Form).toMatchSnapshot();
  })

  it("should render the component with mock data", () => {
    const wrapper = <Form fieldsData={mockFields} />;
    expect(wrapper).toMatchSnapshot();
  })
})
