import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />);
  });

  test("NumberOfEvents component contains an element with the role of textbox", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test("Default number of events shown is 32", () => {
    let textInput = NumberOfEventsComponent.queryByRole("textbox");
    expect(textInput).toHaveValue("32");
  });
});
