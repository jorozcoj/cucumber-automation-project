@ui @cart
Feature: Cart

  Scenario: Add product to cart
    Given User opens home page
    And User searches for "Hammer"
    When User selects first product
    And User adds product to cart
    Then Cart badge should display "1"