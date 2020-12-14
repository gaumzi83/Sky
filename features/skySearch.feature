Feature: This feature will make the search show the results that are determined by editorial, as well as generic searches.

  Scenario: User sees the editorial section in specific searches
    Given I am on the home page 'https://www.sky.com'
    When I search ‘sky’ in the search bar
    Then I should see an editorial section - Sky Shop