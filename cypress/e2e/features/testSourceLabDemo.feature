Feature: Login Demo SourceLab

    Scenario Outline: Scenario Outline name: Scenario name
    Given a user start SourceLab
    When a user type the username <username> and password <password>
    And a user clicks on the login button
    Then validate login
      Examples:
    |username|password|
    |"standard_user"|"secret_sauce"|
    |"standard_user"|"secret_sauce"|
