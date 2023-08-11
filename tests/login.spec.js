const { Builder, By } = require("selenium-webdriver");
const fs = require("fs");

//Prueba automatizada
describe("login", () => {
    it("funcionalidad del login de facebook", async () => {
        let driver = new Builder().forBrowser("chrome").build();
        try {
            await driver.get("https://www.facebook.com");
            await driver.findElement(By.id("email")).sendKeys("pruebadeprog3@hotmail.com");
            await driver.findElement(By.css("#pass")).sendKeys("Pruebaprog3");
            await driver.findElement(By.css('[data-testid="royal_login_button"]')).click();
            await driver.sleep(8000);

            // Capturar la pantalla y guardarla en un archivo
            const screenshot = await driver.takeScreenshot();
            fs.writeFileSync("screenshot.png", screenshot, "base64");
        } finally {

            // Cerrar el navegador después de la prueba
            await driver.quit();
            
        }
    });
});




