Feature: The app works

  Scenario: Visit Antiope
    When I visit Antiope
    Then I should see the title "Antiope"
    And I should see "Approaching the Atmosphere!"

  Scenario: Has Side nav
    When I visit Antiope
    Then I should see the side nav
