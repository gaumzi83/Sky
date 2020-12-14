Feature: This feature will make sure that the shop page is navigable and usable.

  Scenario: User navigates to shop page
    Given I am on the home page 'https://www.sky.com'
    When I navigate to 'Deals'
    Then the user should be on the 'https://www.sky.com/shop/offers' page
      
  Scenario: User sees a list of offers on the latest offers page
    Given I am on the 'Offers' page 'https://www.sky.com/shop/offers'
    Then I see a list of offers with a price to it



