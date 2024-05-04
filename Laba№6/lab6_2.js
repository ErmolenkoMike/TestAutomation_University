const { Builder, By, Key } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const { expect } = require('@jest/globals');

describe('Google Search Tests', () => {
    let driver;

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser('opera')
            .setFirefoxOptions(new firefox.Options())
            .build();
    });

    afterAll(async () => {
        await driver.quit();
    });

    test('Google logo should be present on the home page', async () => {
        await driver.get('https://www.google.com');
        const logo = await driver.findElement(By.id('hplogo'));
        expect(logo).toBeDefined();
    });

    test('Search button should be visible and clickable', async () => {
        const searchButton = await driver.findElement(By.name('btnK'));
        expect(await searchButton.isEnabled()).toBe(true);
    });
});