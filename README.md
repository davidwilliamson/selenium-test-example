# selenium-test-example
Demonstrates usage of selenium-test-framework

node.js based Selenium testing using docker containers

Uses [selenium-test-framework](https://github.com/davidwilliamson/selenium-test-framework) as an NPM module


## Prerequisites
To support running tests inside docker containers, install [Docker toolbox](https://www.docker.com/docker-toolbox) 

If you want to develop and run tests on your local desktop, you will need to install:
- java runtime (tested with version 1.6.0)
- Node.js, including NPM  (tested with Node.js 5.2.0)
- Chrome browser

**Note:** Mac OS X users should read [Java's Mac documentation](https://www.java.com/en/download/faq/java_mac.xml)

You can manage installing Node and Java via [Homebrew](http://brew.sh/).
Java can also be installed via [java.com](https://www.java.com/en/download/help/mac_install.xml)

If using brew, verify your homebrew installation:

`brew --version`

Verify your Java installation:

`java -version`

And your Node.js installation

`node --version`

## Set up
`npm install`

## Running tests
To run tests inside a container
`npm run selenium`
To run tests on your desktop
`npm run selenium-standalone`

