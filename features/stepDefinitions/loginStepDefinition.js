var { Given, When, Then } = require('cucumber');
var browser = require('protractor');
var request = require('superagent');
var seleniumWebdriver = require('selenium-webdriver');

var userName, passWord;
Given('simple user is Nishant', function () {
  //console.log('simple user');
});

When('send GET request to rest api to retrieve username and password', function () {
  var deferredRequest = protractor.promise.defer();
  var requestUrl = "https://my-json-server.typicode.com/nishudixit/barco-assignment/Nishant"; //mention the request URL here
  request
    .get(requestUrl)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .end(function (err, res) {
      if (err) {
        console.error(err);
        deferredRequest.cancel(err);
        console.log(err.text);
      } else {
        username = JSON.parse(res.text).UserName;
        password = JSON.parse(res.text).Password;
        console.log("fetch username from json response "+username);
        console.log("fetch password from json response "+password);
        deferredRequest.fulfill(res);
      }
    });
  return deferredRequest.promise;
});

Then('user navigates to git hub website and enter username and password to login', function () {
  protractor.browser.get(protractor.browser.baseUrl);
  function myUsername(username) {
    document.getElementById("login_field").value = username
  }
  function myPassword(password) {
    document.getElementById("password").value = password;
  }
  function click() {
    document.getElementsByName("commit").click;
  }
});