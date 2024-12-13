import { render, waitFor, within } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("If the user has not specified a desired number of displayed events, then 32 events will be displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    given("the list of events is displayed", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    when("the user has not specified a number of events to display", () => {});

    then("32 events will be displayed", async () => {
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("If the user has specified a desired number of displayed events, then that number of events will be displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let NumberOfEventsDOM;
    let EventListDOM;
    let textInput;
    given("the list of events is displayed", () => {
      AppComponent = render(<App />);
      AppDOM = AppComponent.container.firstChild;
      EventListDOM = AppDOM.querySelector("#event-list");
    });

    when("the user specifies a number of events to display", async () => {
      const user = userEvent.setup();
      NumberOfEventsDOM = AppDOM.querySelector("#number-of-events");
      textInput = within(NumberOfEventsDOM).queryByRole("textbox");
      await user.type(textInput, "{backspace}{backspace}10");
    });

    then("only that number of events will be displayed", () => {
      EventListDOM = AppDOM.querySelector("#event-list");
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      expect(EventListItems.length).toBe(10);
    });
  });
});
