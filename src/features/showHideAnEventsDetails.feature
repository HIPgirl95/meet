Feature: Show/Hide event details
    Scenario: When user hasn't selected "Show details", only basic information should be displayed
        Given the app has just been opened
        When the list of events is displayed
        Then the events should be collapsed and only display basic information
    
    Scenario: When user clicks on the "Show Details" button, the event should expand to show more details
        Given the list of events is displayed
        When user clicks 'Show Details' on an event
        Then the event will expand to give more details
    
    Scenario: When an event is showing more details, the user can click "Hide Details" to collapse the event
        Given an event has been clicked on and is showing more details
        When user clicks 'Hide details' on the event
        Then the event will collapse to hide the details