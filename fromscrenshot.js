const { Builder, Browser, By, until } = require('selenium-webdriver');
const fs = require('fs'); // Required to save the screenshot file to your machine

async function testHerokuappLogin() {
    // 1. Launch the Chrome browser
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    
    try {
        // 2. Navigate to the login page of The Internet Herokuapp
        await driver.get('https://the-internet.herokuapp.com/login');
        console.log('Website opened successfully.');

        // 3. Locate elements using XPath and input credentials
        // Note: Entering an INVALID username intentionally here ('tomsmith12')
        let usernameField = await driver.findElement(By.xpath("//input[@id='username']"));
        await usernameField.sendKeys('tomsmith12'); // <--- Invalid username
        
        let passwordField = await driver.findElement(By.xpath("//input[@id='password']"));
        await passwordField.sendKeys('SuperSecretPassword!');
        
        // 4. Click the Login button
        let loginButton = await driver.findElement(By.xpath("//button[@type='submit']"));
        await loginButton.click();
        
        // 5. Verify the flash message
        // Wait up to 5 seconds for the flash message element to be visible
        let flashMessageElement = await driver.wait(
            until.elementLocated(By.id('flash')), 
            5000
        );
        
        // Retrieve the text inside the element
        let messageText = await flashMessageElement.getText();
        
        // Check if the text matches what we expect
        if (messageText.includes('You logged into a secure area!')) {
            console.log('Login successful! Success flash message detected. 🎉');
            
            let imageString = await driver.takeScreenshot();
            fs.writeFileSync('login_success.png', imageString, 'base64');
            console.log('Screenshot saved successfully as "login_success.png"! 📸');
            
            let logoutButton = await driver.findElement(By.xpath("//*[@id='content']/div/a/i"));
            await logoutButton.click();
            console.log('Logout successful! 👋');
            
        } else if (messageText.includes('Your username is invalid!')) {
            // --- HANDLES THE INVALID USERNAME/PASSWORD SCENARIO HERE ---
            console.log('Login failed as expected! Red error flash message detected. ❌');
            
            // Capture the screenshot of the invalid login page state
            let imageString = await driver.takeScreenshot();
            fs.writeFileSync('login_invalid_username.png', imageString, 'base64');
            console.log('Screenshot saved successfully as "login_invalid_username.png"! 📸');
            
        } else {
            console.log('An unexpected flash message was found. Got:', messageText);
        }
        
    } catch (error) {
        console.error('An error occurred during the test:', error);
    } finally {
        // Wait for 3 seconds before closing the browser to view the final state
        await driver.sleep(3000);
        // Close the browser instance and end the session
        await driver.quit();
    }
}

testHerokuappLogin();