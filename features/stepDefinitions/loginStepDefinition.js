var { Given, When, Then } = require('cucumber');
var request = require('superagent');

Given('simple user is Nishant', function () {
  console.log('simple user');
});

When('send PUT request to rest api to retrieve username and password', function () {
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
        deferredRequest.fulfill(res);
        console.log(res.text);
        var uname = res.text.split('"UserName":"')[1].split('"')[0];
        var pass = res.text.split('"Password":"')[1].split('"')[0];

        console.log(uname);
        console.log(pass);
      }
    });
  return deferredRequest.promise;
});

Then('GET response from rest api and username should be {string}', function (string) {
  console.log('test');
});