'use strict';

var test = require('selenium-webdriver/testing');
var assert = require('chai').assert;
var DriverBuilder = require('selenium_test_runner').DriverBuilder;
var BasePage = require('selenium_test_runner').BasePage;

test.describe('Webdriver', function() {
    this.timeout(35000);
    var driver;
    test.beforeEach(function() {
        driver = DriverBuilder.build();
    });

    test.it('can start a browser', function() {
        var example = new BasePage(driver);
        var url = 'http://www.example.com/';
        console.log('Fetching page: ' + url);
        example.open(url);
        example.getTitle().then(function(result) {
            assert.include(result, 'Example', 'Loaded page');
        });
    });

    test.afterEach(function(done) {
        console.log("tearing down");
        driver.quit().then (function (){
            done();
        });
    });
});
