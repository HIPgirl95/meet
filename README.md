<h1>Meet App - Using CRA</h1>

This app will eventually be a serverless, PWA with react using a TDD technique. The application will use the Google Calendar API to fetch upcoming events. It will then allow users to navigate events via city and find details about them.

<h2>Features - User Stories and Gherkin's syntax</h2>

1. As a USER, I should be able to FILTER EVENTS BY CITY, so that I can VIEW A LIST OF AVAILABLE EVENTS IN THAT CITY. </br>
   Scenario 1.</br>
   • Given the user hasn’t searched for any city</br>
   • When the user opens the app</br>
   • Then the user should see a list of upcoming events</br>
   Scenario 2.</br>
   • Given the main page is open</br>
   • When the user starts typing in the city textbox</br>
   • Then the user should receive a list of cities (suggestions) that match what they’ve typed</br>
   Scenario 3.</br>
   • Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing</br>
   • When the user selects a city from the list,</br>
   • Then their city should be changed to that city AND the user should receive a list of upcoming events in that city.</br></br>

2. As a USER, I should be able to SHOW/HIDE EVENT DETAILS, so that I can LEARN MORE INFORMATION ABOUT THE EVENTS THAT INTEREST ME</br>
   Scenario 1.</br>
   • Given the list of events is displayed</br>
   • When a user looks at the list</br>
   • Then the events should be collapsed and only display basic information</br>
   Scenario 2.</br>
   • Given the list of events is displayed</br>
   • When the user clicks “expand” or “show more” on an event</br>
   • Then the event will expand to give more details</br>
   Scenario 3.</br>
   • Given an event is expanded and showing more details</br>
   • When the user clicks “show less”</br>
   • Then the event will collapse and hide extra details</br></br>

3. As a USER, I should be able to SPECIFY NUMBER OF EVENTS, so that I can TAILOR MY VIEWING PREFRENCES AS DESIRED</br>
   Scenario 1.</br>
   • Given the list of events is displayed</br>
   • When the user hasn’t specified a number of events to display</br>
   • Then the default number of events, 32, will be displayed</br>
   Scenario 2.</br>
   • Given the list of events is displayed</br>
   • When the user specifies a number of events to display</br>
   • Then only that number of events will be displayed</br></br>

4. As a USER, I should be able to USE THE APP WHEN OFFLINE, so that I can FIND EVENTS TO GO TO EVEN WHEN I HAVE NO OR LIMITED INTERNET CONNECTION</br>
   Scenario 1.</br>
   • Given user has opened the app without an internet connection</br>
   • When the user attempts to view cached data</br>
   • Then cached data will be displayed</br>
   Scenario 2.</br>
   • Given user has opened the app without an internet connection</br>
   • When the user attempts to change search settings (display new information)</br>
   • Then an error message will be displayed</br></br>

5. As a USER, I should be able to ADD AN APP SHORTCUT TO THE HOME SCREEN, so that I CAN EASILY ACCESS THE APP</br>
   Scenario 1.</br>
   • Given a user wants to access the app faster and more frequently</br>
   • When they install the app as a shortcut</br>
   • Then they will be able to access the app from their device home screen</br></br>

6. As a USER, I should be able to VIEW CHARTS VISUALIZING EVENT DETAILS, so that I can SEE WHERE AND WHAT KIND OF EVENTS ARE MOST POPULAR</br>
   Scenario 1.</br>
   • Given a user wants to make conclusions about popularity of locations or event types</br>
   • When they access the data portion of the app</br>
   • Then the user can see a chart with the number of upcoming events in each city.

change "test" in package.json to "test": "react-scripts test --coverage --watchAll" to run coverage tests
