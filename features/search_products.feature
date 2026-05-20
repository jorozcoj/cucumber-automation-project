@ui @search
Feature: Search products
Scenario: Search for Hammer
    Given User opens home page
    When User searches for "Hammer"
    Then Search results should be visible

  Scenario: Search for Screwdriver
    Given User opens home page
    When User searches for "Screwdriver"
    Then Search results should be visible