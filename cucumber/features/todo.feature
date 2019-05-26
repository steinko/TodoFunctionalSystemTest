Feature: Loging
Scenario: Sucessfull Login
Given I am logged out
When I enter the password "dummy"
And Click on Login button
Then I should sea Sucessfull Login message been displayd