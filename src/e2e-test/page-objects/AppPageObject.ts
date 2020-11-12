import {By, WebDriver} from "selenium-webdriver"
import {GreetingPageObject} from "./GreetingPageObject"
import {GreetingTestId} from "../../component/presentation/Greeting"
import {testIdSelector} from "./testIdSelector"

export class AppPageObject {
    constructor(private driver: WebDriver) {
    }

    public async load(timeout: number) {
        const driver = await this.driver.get("http://localhost:1234/")
        await this.driver.wait(async () => await this.greeting().name() !== "", timeout)
        return driver
    }

    public title() {
        return this.driver.getTitle()
    }

    public greeting() {
        return new GreetingPageObject(this.driver.findElement(By.css(testIdSelector(GreetingTestId.Container))))
    }

}
