const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const fs = require("fs");

async function scrapeBooks() {
    let options = new chrome.Options();
    options.addArguments('--headless=new');          
    options.addArguments('--no-sandbox');            
    options.addArguments('--disable-dev-shm-usage'); 

    let driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(options)
        .build();

    let allBooks = [];

    try {
        await driver.get("https://books.toscrape.com/");
        console.log("Site ouvert");

        let hasNext = true;

        while (hasNext) {
            await driver.wait(until.elementsLocated(By.css(".product_pod")), 5000);
            let books = await driver.findElements(By.css(".product_pod"));

            for (let book of books) {
                let title = await book.findElement(By.css("h3 a")).getAttribute("title");
                let price = await book.findElement(By.css(".price_color")).getText();
                let stock = await book.findElement(By.css(".instock")).getText();
                let ratingClass = await book.findElement(By.css("p.star-rating")).getAttribute("class");

                let rating = "Unknown";
                if (ratingClass.includes("One")) rating = "1";
                if (ratingClass.includes("Two")) rating = "2";
                if (ratingClass.includes("Three")) rating = "3";
                if (ratingClass.includes("Four")) rating = "4";
                if (ratingClass.includes("Five")) rating = "5";

                allBooks.push({ title, price, stock, rating });
            }

            console.log(`Page scrapée: ${allBooks.length} livres récupérés`);

            let nextButton = await driver.findElements(By.css(".next a"));
            if (nextButton.length > 0) {
                await nextButton[0].click();
                await driver.sleep(1500); 
            } else {
                hasNext = false;
            }
        }

        fs.writeFileSync("books.json", JSON.stringify(allBooks, null, 2));
        console.log("Scraping terminé ✅ fichier books.json créé");

    } catch (err) {
        console.error("Erreur:", err);
    } finally {
        await driver.quit();
    }
}

scrapeBooks();
