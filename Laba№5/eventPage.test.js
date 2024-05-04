const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

// Встановлення шляху до chromedriver за допомогою ServiceBuilder
const chromeDriverPath = 'C:\\Users\\Mike\\Desktop\\2semester\\Automation\\Laba№3\\node_modules\\webdriver-manager\\selenium\\chromedriver.exe';
const serviceBuilder = new chrome.ServiceBuilder(chromeDriverPath);

const options = new chrome.Options();

describe('Test event page functionality', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .setChromeService(serviceBuilder)
            .build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Open Browser', async () => {
        // затримки тут більше потрібні щоб анти бот пройти
		await driver.get('https://concert.ua/uk/kyiv');
		await driver.sleep(3000);
		await driver.wait(until.elementLocated(By.className('header-date-picker-wrapper')), 10000).click();
		await driver.sleep(3000);
		await driver.wait(until.elementLocated(By.css('a[href="/uk/catalog/kyiv/all-categories/period=today"]')), 10000).click();
		await driver.sleep(20000);
		await driver.wait(until.elementLocated(By.css('#event-list a')), 5000);         
        const firstEventLink = await driver.findElement(By.css('#event-list a'));
		//Данні найближчої події
        const date = await firstEventLink.findElement(By.css('.event__date')).getText();
        const eventName = await firstEventLink.findElement(By.css('.event__name')).getText();
        const place = await firstEventLink.findElement(By.css('.event__place')).getText();
        const price = await firstEventLink.findElement(By.css('.event__price')).getText();

        console.log(`Дата: ${date}`);
        console.log(`Назва події: ${eventName}`);
        console.log(`Місце проведення: ${place}`);
        console.log(`Ціна: ${price}`);
    });
});
