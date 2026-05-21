@ui @register
Feature: User registration

  Scenario: User should register successfully
    Given User opens register page
    When User completes registration form
    Then Login form should be visible