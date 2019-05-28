Feature: Loging

 I want to login to todo app
 
@focus 
Scenario: Sucessfull Login
Given I am logged out
When I enter the password "dummy"
And Click on Login button
Then I should see a Welcome message been displayed

@focus 
Scenario: Should be Welcomed
Given I am logged out
When I enter the password "dummy"
And Click on Login button
And Click Get Welcome button
Then I should see the Hello World message been displayed