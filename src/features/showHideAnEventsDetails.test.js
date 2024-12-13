import { render, waitFor, within } from "@testing-library/react";
import { defineFeature, loadFeature } from "jest-cucumber";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test('When user hasn\'t selected "Show details", only basic information should be displayed', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the app has just been opened", () => {
      AppComponent = render(<App />);
    });

    when("the list of events is displayed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    then(
      "the events should be collapsed and only display basic information",
      () => {
        const AppDOM = AppComponent.container.firstChild;
        const eventDetails = AppDOM.querySelector(".details");
        expect(eventDetails).not.toBeInTheDocument();
      }
    );
  });

  test('When user clicks on the "Show Details" button, the event should expand to show more details', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the list of events is displayed", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBeGreaterThan(0);
      });
    });

    when("user clicks 'Show details' on an event", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const showDetails = EventListDOM.querySelector(".details-button");
      await user.click(showDetails);
    });

    then("the event will expand to give more details", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".details");
      expect(eventDetails).toBeInTheDocument();
    });
  });

  test('When an event is showing more details, the user can click "Hide Details" to collapse the event', ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let AppDOM;
    let EventListDOM;
    let eventDetails;
    let showDetails;
    given(
      "an event has been clicked on and is showing more details",
      async () => {
        const user = userEvent.setup();
        AppComponent = render(<App />);
        AppDOM = AppComponent.container.firstChild;
        EventListDOM = AppDOM.querySelector("#event-list");
        showDetails = EventListDOM.querySelector(".details-button");
        await user.click(showDetails);
      }
    );

    when("user clicks 'Hide details' on the event", async () => {
      const user = userEvent.setup();
      await user.click(showDetails);
    });

    then("the event will collapse to hide the details", () => {
      eventDetails = EventListDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });
});
