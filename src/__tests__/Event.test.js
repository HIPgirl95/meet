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
    const showDetailsButton = EventComponent.queryByRole("button");
    expect(showDetailsButton).toBeInTheDocument();
  });
});
