// const { Builder, By, Key, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");

// (async function googleCheck() {
//   let driver = await new Builder().forBrowser("chrome").build();
//   try {
//     await driver.get("http://google.com");
//     await driver.wait(until.titleIs("Google"), 1000);
//     await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
//     await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
//   } finally {
//     await driver.quit();
//   }
// })();


const { Builder, By, until } = require('selenium-webdriver');

(async function googleCheck() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');

    await driver.getTitle().then(title => {
      console.log('Page title:', title);
    });


    await driver.findElement(By.name('q')).isDisplayed().then(displayed => {
      console.log('Search field is available:', displayed);
    }).catch(() => {
      console.error('Error. Search field not found.');
    });


    await driver.findElement(By.linkText('Gmail')).isDisplayed().then(displayed => {
      console.log('Link on Gmail is available:', displayed);
    }).catch(() => {
      console.error('Error. Gmail link not found.');
    });


    await driver.findElement(By.css('img[alt="Google"]')).isDisplayed().then(displayed => {
      console.log('Google logo is available:', displayed);
    }).catch(() => {
      console.error('Error. Google logo not found.');
    });


    try {
      await driver.wait(until.elementLocated(By.name('btnK')), 10000);
      console.log('Button "Search" is available on page');
    } catch (error) {
      console.error('Error. "Search" button not found.');
    }


  } finally {
    await driver.quit();
  }
})();
