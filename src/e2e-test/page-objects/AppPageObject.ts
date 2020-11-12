import {By, WebDriver} from "selenium-webdriver"
import {GreetingPageObject} from "./GreetingPageObject"
import {pollUntilTrue} from "./e2e-util"
import {GreetingTestId} from "../../component/presentation/Greeting"
import {testIdSelector} from "../../util/test/container"

export class AppPageObject {
    constructor(private driver: WebDriver) {
    }

    public async load(timeout: number) {
        const driver = await this.driver.get("http://localhost:1234/")
        await pollUntilTrue(async () => await this.greeting().name() !== "", timeout)
        return driver
    }

    public title() {
        return this.driver.getTitle()
    }

    public greeting() {
        return new GreetingPageObject(this.driver.findElement(By.css(testIdSelector(GreetingTestId.Container))))
    }


}
