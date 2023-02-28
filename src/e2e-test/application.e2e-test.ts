import "chromedriver"
import {Builder, WebDriver} from "selenium-webdriver"
import * as chrome from "selenium-webdriver/chrome"
import {AppPageObject} from "./page-objects/AppPageObject"
import {expect} from "chai"

const testTimoutPeriod = 2 * 60 * 1000

describe("the app", () => {
    let driver: WebDriver, application: AppPageObject

    before( async function() {
        this.timeout(testTimoutPeriod)

        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(new chrome.Options().addArguments("headless"))
            .build()

        application = new AppPageObject(driver)
    })

    after(async () => {
        await driver.quit()
    })

    it("has a title", async () => {
        await application.load(testTimoutPeriod)
        expect(await application.title()).to.eql("Example App")
    })

    it("displays a todo item", async () => {
        expect(await (await application.toDoList().items())[0].description()).to.eql("Get groceries")
    })

})
