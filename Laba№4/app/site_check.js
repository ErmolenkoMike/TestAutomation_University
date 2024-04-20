const { Builder, By, until, Key } = require('selenium-webdriver');

async function userLogin(driver, email, passw) {
  console.log("Navigating to https://automationexercise.com/");
  await driver.get("https://automationexercise.com/");

  console.log("Clicking on 'Login' button");
  await driver.findElement(By.linkText("Signup / Login")).click();

  await driver.getTitle().then(title => {
    console.log("Page title:", title);
  });

  console.log("Entering email and password");
  await driver.findElement(By.name("email")).sendKeys(email);
  await driver.findElement(By.name("password")).sendKeys(passw);
  console.log("Clicking on 'Login' button");
  await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click().then(() => {
    console.log("Succesfull login");
  }).catch(() => {
    console.error("Login error.");
  });
};


(async function scenario1() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Running Scenario 1\n");
    await userLogin(driver, "maf1oznik322050@gmail.com", "2109200209");
    let userName = await driver.findElement(By.xpath("//a[contains(text(), 'Logged in as')]/b")).getText();
    console.log(`User Name: ${userName}`);
  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
})();


(async function scenario2() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Running Scenario 2\n");

    console.log("Navigating to https://automationexercise.com/");
    await driver.get('https://automationexercise.com/');

    console.log("Clicking on 'Login' button");
    await driver.findElement(By.linkText("Signup / Login")).click();

    console.log("Entering password");
    await driver.findElement(By.name("password")).sendKeys("2109200209");

    console.log("Clicking on 'Login' button without entering email");
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();

    let emailInput = await driver.findElement(By.name("email"));
    let validationMessage = await emailInput.getAttribute("validationMessage");
    console.log(`Validation Message: ${validationMessage}`);
  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
})();


(async function scenario3() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Running Scenario 3\n");

    console.log("Navigating to https://automationexercise.com/");
    await driver.get('https://automationexercise.com/');

    console.log("Clicking on 'Login' button");
    await driver.findElement(By.linkText("Signup / Login")).click();

    console.log("Entering email");
    await driver.findElement(By.name("email")).sendKeys("maf1oznik322050@gmail.com");

    console.log("Clicking on 'Login' button without entering password");
    await driver.findElement(By.xpath("//button[contains(text(), 'Login')]")).click();

    let passwInput = await driver.findElement(By.name("password"));
    let validationMessage = await passwInput.getAttribute("validationMessage");
    console.log(`Validation Message: ${validationMessage}`);
  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
})();


(async function scenario4() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Running Scenario 4\n");

    await userLogin(driver, "maf1oznik322050@gmail.com", "2109200209");

    console.log("Navigating to T-shirts section");
    await driver.get('https://automationexercise.com/category_products/3');

    console.log("Opening 'Premium Polo T-Shirts' product");
    await driver.get("https://automationexercise.com/product_details/30");

    let quantityInput = await driver.findElement(By.name("quantity"));
    await quantityInput.clear();
    await quantityInput.sendKeys('2');

    console.log("Adding product to cart");
    await driver.findElement(By.css("button.btn.btn-default.cart"), 4000).click();

    console.log("Proceeding to checkout");
    await driver.findElement(By.linkText("Cart")).click();

    let productNameEl = await driver.findElement(By.xpath("//td[contains(@class, 'cart_description')]//h4/a"));
    let productName = await productNameEl.getText();
    console.log(`Product Name: ${productName}`);

    let productPriceEl = await driver.findElement(By.xpath("//td[contains(@class, 'cart_price')]//p"));
    let productPrice = (await productPriceEl.getText()).replace("Rs. ", "");
    let productPriceNum = parseFloat(productPrice);
    console.log(`Product Price: ${productPriceNum}`);

    let totalPriceElement = await driver.findElement(By.xpath("//td[contains(@class, 'cart_total')]//p"));
    let totalPrice = (await totalPriceElement.getText()).replace("Rs. ", "");
    let totalPriceNum = parseFloat(totalPrice);

    if (totalPriceNum == productPriceNum * 2) {
      console.log("Total price is correct");
    } else {
      console.log("Total price is incorrect");
    }

  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
})();


(async function scenario5() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    console.log("Running Scenario 5\n");

    await userLogin(driver, "maf1oznik322050@gmail.com", "2109200209");

    console.log("Proceeding to Products");
    await driver.findElement(By.xpath("//a[contains(text(), 'Products')]")).click().then(() => {
      console.log("Products opened");
    });

    await driver.wait(until.titleContains("Automation Exercise - All Products"), 2000);

    console.log("Entering 'Stylish Dress' in the search field\n");
    await driver.findElement(By.id("search_product")).sendKeys("Stylish Dress", Key.RETURN);
    await driver.findElement(By.id("submit_search")).click();

    console.log("Checking that the product is found");
    try {
      await driver.findElement(By.xpath("//p[contains(text(), 'Stylish Dress')]")).getText();
      console.log("Product found\n");
    } catch (error) {
      console.log("Product not found\n");
    }

    console.log("Checking that the product has a 20% discount");
    try {
      await driver.findElement(By.xpath("//p[contains(text(), '20% off')]"));
      console.log("Product has a 20% discount\n");
    } catch (error) {
      console.log("Product does not have a 20% discount\n");
    }
  } finally {
    console.log("Quitting driver");
    await driver.quit();
  }
})();