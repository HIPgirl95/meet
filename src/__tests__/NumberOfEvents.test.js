import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";
import { render } from "@testing-library/react";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents currentNOE={32} setCurrentNOE={() => {}} />
    );
  });

  test("NumberOfEvents component contains an element with the role of textbox", () => {
    expect(NumberOfEventsComponent.queryByRole("textbox")).toBeInTheDocument();
  });

  test("Default number of events shown is 32", () => {
    const textInput = NumberOfEventsComponent.queryByRole("textbox");
    expect(textInput).toHaveValue("32");
  });

  test("NumberOfEvents value changes when user enters a new number", async () => {
    const textInput = NumberOfEventsComponent.queryByRole("textbox");
    const user = userEvent.setup();
    await user.type(textInput, "{backspace}{backspace}10");
    expect(textInput).toHaveValue("10");
  });
});
