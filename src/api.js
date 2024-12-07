import mockData from "./mock-data";

// This function takes an events arrar, then uses map to create a new array with only locations.
// It will also remove all duplicates by creating another new array using the spread operator and spreding a Set
// The set will remove all duplicates from the array

export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

// This function will fetch the list of all events

export const getEvents = async () => {
  return mockData;
};
