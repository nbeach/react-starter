import "chromedriver"
import {Builder, WebDriver} from "selenium-webdriver"
import * as chrome from "selenium-webdriver/chrome"
import {AppPageObject} from "./page-objects/AppPageObject"

const testTimoutPeriod = 2 * 60 * 1000
jest.setTimeout(testTimoutPeriod)

describe("the app", () => {
    let driver: WebDriver, application: AppPageObject

    beforeAll(async () => {
        driver = await new Builder()
            .forBrowser("chrome")
            .setChromeOptions(new chrome.Options().addArguments("headless"))
            .build()

        application = new AppPageObject(driver)
    })

    afterAll(async () => {
        await driver.quit()
    })

    it("has a title", async () => {
        await application.load(testTimoutPeriod)
        expect(await application.title()).toEqual("Example App")
    })

    it("displays a greeting", async () => {
        expect(await application.greeting().name()).toEqual("Hello John")
    })

})

