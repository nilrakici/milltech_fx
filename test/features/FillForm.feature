#To Do - Convert following requirement into a testable feature

Feature: Form Submission
  As an automation tester
  I want to fill and submit the practice form on the demoqa.com website with the details

  Background:
    Given  I open the site and navigate to the Form Page

  Scenario: Practice Form submission check
    Given I open the Practice Form page
    When  I fill and submit the form with the details
    Then  I can display the correct user details on the screen


