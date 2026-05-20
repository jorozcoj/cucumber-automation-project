@ui @filter
Feature: Product filters

  Scenario: Filter products by category
    Given User opens home page
    When User filters hand tools
    Then Filtered products should be visible