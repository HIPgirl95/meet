import { render } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";
import mockData from "../mock-data";

describe("<Event /> component", () => {
  let EventComponent;
  const event = mockData[0];
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test("renders event title", () => {
    const eventTitle = EventComponent.queryByText(event.summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test("renders event location", () => {
    const eventLocation = EventComponent.queryByText(event.location);
    expect(eventLocation).toBeInTheDocument();
  });

  test("renders event start time", () => {
    const eventStartTime = EventComponent.queryByText(event.created);
    expect(eventStartTime).toBeInTheDocument();
  });

  test("renders a 'show details' button", () => {
    const showDetailsButton = EventComponent.queryByText("Show Details");
    expect(showDetailsButton).toBeInTheDocument();
  });

  test("by default, event's details section should be hidden", () => {
    const EventDetails = EventComponent.container.querySelector(".details");
    expect(EventDetails).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {});

  test("hides the details section when the user clicks on the 'hide details' button", async () => {});
});
