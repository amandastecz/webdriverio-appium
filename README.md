# webdriverio-appium

Automated tests to Android mobile application.
This project use as tests frameworks: Appium, WebDriveIO and BrowserStack.
Also have CI/CD integration with GitHub Actions to run the test suite.

## Test report

[Check the test report here.](http://192.168.15.151:58621/index.html)

## Running locally

Run: `npx wdio`.

## Running on BrowserStack

Run `npm run wdio:bs`, but first you must have config the .env file.

## Running on GitHub Actions

Merge a PR or trigger it manually. In this case, you don't need to config the .env file.