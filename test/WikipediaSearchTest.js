'use strict';

var test = require('selenium_test_runner').test;
var assert = require('selenium_test_runner').assert;
var DriverBuilder = require('selenium_test_runner').DriverBuilder;
var WikipediaHomePage = require('../pageobjects/WikipediaHomePage');

test.describe('WikipediaHomePage tests', function() {
    this.timeout(5000);

    var driver;
    var page;

    test.before(function() {
        driver = DriverBuilder.build();
        var url = 'http://en.wikipedia.org';
        console.log('Fetching page: ' + url);
        page = new WikipediaHomePage(driver);
        page.open(url);
        page.isLoaded();
    });

    test.it('should support search', function() {
        page.search('selenium\n');
        page.waitForPageTitle('selenium');
        page.getTitle().then(function(title) {
            assert.include(title, 'Selenium - Wikipedia', 'Title is correct');
        });
    });

    /**
     * Clean up function after all tests end
     */
    test.after(function(done) {
        driver.quit().then(function() {
            done();
        });
    });
});
