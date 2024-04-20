const { Builder, By, until, Key } = require("selenium-webdriver");

(async function wikipediaCheck() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://uk.wikipedia.org");

    await driver.findElement(By.name("search")).sendKeys("Київ", Key.RETURN);

    await driver.wait(until.titleContains("Київ"), 4000);

    await driver.findElement(By.linkText("Київ")).click();


    await driver.findElement(By.css("img[src='//upload.wikimedia.org/wikipedia/commons/thumb/1/1a/COA_of_Kyiv_Kurovskyi.svg/90px-COA_of_Kyiv_Kurovskyi.svg.png']")).isDisplayed().then(displayed => {
      console.log("Image of the coat of arms of Kyiv is available:", displayed);
    }).catch(() => {
      console.error("Error. Image of the coat of arms of Kyiv not found.");
    });


    const populationElement = await driver.findElement(By.xpath("//td[contains(text(),' 2 952 301 (1 січня 2022)')]"));
    let populationText = await populationElement.getText();
    populationText = populationText.split("[")[0].trim();
    console.log("Population of Kyiv:", populationText);


    await driver.findElement(By.xpath('//th[contains(text(),"Середня температура")]')).isDisplayed().then(displayed => {
      console.log("Element 'Середня температура' is available:", displayed);
    }).catch(() => {
      console.error("Error. Element 'Середня температура' not found.");
    });


    const avgTempElement = await driver.findElement(By.xpath("//*[@id='collapsibleTable0']/tbody/tr[5]/th[5]"));
    const avgTempText = await avgTempElement.getText();
    console.log("Average temperature in April,°C:", avgTempText);


    await driver.findElement(By.linkText("Коронавірусна хвороба 2019 в Україні")).isDisplayed().then(displayed => {
      console.log("Subsection 'Коронавірусна хвороба 2019 в Україні' is available:", displayed);
    }).catch(() => {
      console.error("Error. Subsection 'Коронавірусна хвороба 2019 в Україні' not found.");
    });


    const densityElement = await driver.findElement(By.xpath("//td[contains(text(),'3516,93')]"));
    const densityText = await densityElement.getText();
    console.log("The value of population density:", densityText);


    const monumentsList = await driver.findElements(By.xpath("//*[@id='mw-content-text']/div[1]/ul[11]/li"));
    if (monumentsList.length > 20) {
      console.log("The number of elements in the list of the most outstanding architectural monuments is more than 20.");
    } else {
      console.log("The number of elements in the list of the most outstanding architectural monuments is no more than 20.");
    }


  } catch (error) {
    console.error("Error:", error);
  } finally {
    await driver.quit();
  }
})();