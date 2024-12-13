Feature: Specify number of events
    Scenario: If the user has not specified a desired number of displayed events, then 32 events will be displayed
        Given the list of events is displayed
        When the user has not specified a number of events to display
        Then 32 events will be displayed
    Scenario: If the user has specified a desired number of displayed events, then that number of events will be displayed
        Given the list of events is displayed
        When the user specifies a number of events to display
        Then only that number of events will be displayed