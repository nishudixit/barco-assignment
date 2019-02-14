Feature: Login flow

    I am going to login using simple user and admin user

    Scenario: Login flow testing for simple user

        Given simple user is Nishant
        When send PUT request to rest api to retrieve username and password
        Then GET response from rest api and username should be "Nishant"