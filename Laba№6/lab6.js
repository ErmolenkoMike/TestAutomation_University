const { Builder, By, Key, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

async function testGoogleHomePage() {
    let driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(new firefox.Options())
        .build();

    try {

        await driver.get('https://www.google.com');

        await driver.findElement(By.id('hplogo'));

        await driver.findElement(By.name('q'));

        await driver.findElement(By.name('btnK'));

        await driver.findElement(By.name('btnSearch')).then(element => {
            console.log('Test 4 passed, the button is marked');
        }, error => {
            console.log('Test 4 failed, the button is not found');
        });

        await driver.findElement(By.name('btnI'));

        await driver.getTitle().then(title => {
            if (title === "Google Search") {
                console.log('Test 6 passed, title correct.');
            } else {
                throw new Error('Test 6 did not pass, wrong title');
            }
        });

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await driver.quit();
        console.log('Test completed, browser closed.');
    }
}

testGoogleHomePage();
