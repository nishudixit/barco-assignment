Feature: Login flow

    I am going to login using simple user and admin user

    Scenario: Login flow testing for simple user

        Given simple user navigates to login page
        When simple user enters username and password
        Then simple user should login successfully

    Scenario: Login flow testing for admin user

        Given admin user navigates to login page
        When admin user enters username and password
        Then admin user should login successfully