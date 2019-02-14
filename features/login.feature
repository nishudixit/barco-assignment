Feature: Login flow

    I am going to login using simple user and admin user

    Scenario: Login flow testing for simple user

        Given simple user is Nishant
        When send GET request to rest api to retrieve username and password
        Then user navigates to git hub website and enter username and password to login