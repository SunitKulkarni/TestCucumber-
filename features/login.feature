Feature: Login Functionality

Scenario: Login with Inavlid  Credentials
    Feature Description
    Given User is in login page of Application
    When User Enter Invalid  User id and Invalid password
    And Click on login button
    Then User should get error message


    Scenario: Login with Valid Credentials
    Feature Description
    Given User is in login page of Application
   When User Enter valid User id and valid password
    And Click on login button
    Then User should be able to see Account overview Page

    Scenario: User Enter Valid User name and enter BLANK Password
    Feature Description
    Given User is in login page of Application
   When User Enter valid User id and Blank password
    And Click on login button
    Then User should get error message

     Scenario: User Enter Valid Password  and enter BLANK User Name 
    Feature Description
    Given User is in login page of Application
   When User Enter BLANK User id and valid password
    And Click on login button
    Then User should get error message