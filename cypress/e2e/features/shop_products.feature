Feature: Shop products 

    Shop products based on current temperature

    Scenario: Shop products based on current temperature
    Given I navigate to Weather Shopper website
    When I select category based on current temperature
    And I select products and move them to cart and verify cart
    And I do payment
    Then products should be successfully purchased
