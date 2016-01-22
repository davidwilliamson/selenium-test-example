'use strict';

var BasePage = require('selenium_test_runner').BasePage;
var By = require('selenium_test_runner').selenium_webdriver.By;
var Until = require('selenium-webdriver').until;

/**
 * Constructor for Wikipedia Home Page
 * Hooks up the Webdriver holder in the base page allowing to call this.driver in page objects
 * @param webdriver
 * @constructor
 */
function WikipediaHomePage (webdriver) {
    BasePage.call(this, webdriver);
}

/**
 * BasePage and Constructor wiring
 * @type {BasePage}
 */
WikipediaHomePage.prototype = Object.create(BasePage.prototype);
WikipediaHomePage.prototype.constructor = WikipediaHomePage;

/**
 * Locators for the elements in this page
 * @type {string}
 */
var SEARCH_BOX_LOCATOR = By.css('#searchInput');

/**
 * Page loaded definition
 * @returns {WikipediaHomePage}
 */
BasePage.prototype.isLoaded = function() {
    this.waitUntilVisible(SEARCH_BOX_LOCATOR);
    return this;
};

/**
 * Do a google search
 * @returns {!webdriver.promise.Promise.<string>}
 */
WikipediaHomePage.prototype.search = function(searchString) {
    this.sendKeys(SEARCH_BOX_LOCATOR, searchString);
};

module.exports = WikipediaHomePage;
