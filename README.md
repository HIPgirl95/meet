<h1>Meet App - Using CRA</h1>

This app will eventually be a serverless, PWA with react using a TDD technique. The application will use the Google Calendar API to fetch upcoming events. It will then allow users to navigate events via city and find details about them.

<h2>Features - User Stories and Gherkin's syntax</h2>

1. As a USER, I should be able to FILTER EVENTS BY CITY, so that I can VIEW A LIST OF AVAILABLE EVENTS IN THAT CITY.
   Scenario 1.
   • Given the user hasn’t searched for any city
   • When the user opens the app
   • Then the user should see a list of upcoming events
   Scenario 2.
   • Given the main page is open
   • When the user starts typing in the city textbox
   • Then the user should receive a list of cities (suggestions) that match what they’ve typed
   Scenario 3.
   • Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
   • When the user selects a city from the list,
   • Then their city should be changed to that city AND the user should receive a list of upcoming events in that city.

2. As a USER, I should be able to SHOW/HIDE EVENT DETAILS, so that I can LEARN MORE INFORMATION ABOUT THE EVENTS THAT INTEREST ME
   Scenario 1.
   • Given the list of events is displayed
   • When a user looks at the list
   • Then the events should be collapsed and only display basic information
   Scenario 2.
   • Given the list of events is displayed
   • When the user clicks “expand” or “show more” on an event
   • Then the event will expand to give more details
   Scenario 3.
   • Given an event is expanded and showing more details
   • When the user clicks “show less”
   • Then the event will collapse and hide extra details

3. As a USER, I should be able to SPECIFY NUMBER OF EVENTS, so that I can TAILOR MY VIEWING PREFRENCES AS DESIRED
   Scenario 1.
   • Given the list of events is displayed
   • When the user hasn’t specified a number of events to display
   • Then the default number of events, 32, will be displayed
   Scenario 2.
   • Given the list of events is displayed
   • When the user specifies a number of events to display
   • Then only that number of events will be displayed

4. As a USER, I should be able to USE THE APP WHEN OFFLINE, so that I can FIND EVENTS TO GO TO EVEN WHEN I HAVE NO OR LIMITED INTERNET CONNECTION
   Scenario 1.
   • Given user has opened the app without an internet connection
   • When the user attempts to view cached data
   • Then cached data will be displayed
   Scenario 2.
   • Given user has opened the app without an internet connection
   • When the user attempts to change search settings (display new information)
   • Then an error message will be displayed

5. As a USER, I should be able to ADD AN APP SHORTCUT TO THE HOME SCREEN, so that I CAN EASILY ACCESS THE APP
   Scenario 1.
   • Given a user wants to access the app faster and more frequently
   • When they install the app as a shortcut
   • Then they will be able to access the app from their device home screen

6. As a USER, I should be able to VIEW CHARTS VISUALIZING EVENT DETAILS, so that I can SEE WHERE AND WHAT KIND OF EVENTS ARE MOST POPULAR
   Scenario 1.
   • Given a user wants to make conclusions about popularity of locations or event types
   • When they access the data portion of the app
   • Then the user can see a chart with the number of upcoming events in each city.
