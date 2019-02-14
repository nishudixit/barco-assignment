var { Given, When, Then } = require('cucumber');
var request = require('superagent');

function apiCall(){
 
};

Given('simple user is Nishant', function () {
  console.log('simple user');
});

When('send PUT request to rest api to retrieve username and password', function () {
  var deferredRequest = protractor.promise.defer();
  var requestUrl = "https://my-json-server.typicode.com/nishudixit/barco-assignment/"; //mention the request URL here
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
        var response = res;
        deferredRequest.fulfill(res);
        console.log(res.text);
        console.log(res.body);
        var obj = JSON.parse(response);
        console.log(obj.UserName);
        //res.body.get()
      }
    });
  return deferredRequest.promise;
});

Then('GET response from rest api and username should be {string}', function (string) {
  console.log('test');
});