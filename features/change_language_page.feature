@ui @language
Feature: Language

  Scenario: Change language
    Given User opens home page
    When User changes language to "es"
    Then Spanish text should be visible