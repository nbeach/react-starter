import {By, WebElement} from "selenium-webdriver"
import {GreetingTestId} from "../../component/presentation/Greeting"
import {testIdSelector} from "../../util/test/container"

export class GreetingPageObject {
    constructor(private host: WebElement) {}

    public async name(): Promise<string> {
        const element = await this.host.findElement(By.css(testIdSelector(GreetingTestId.Message)))
        return element.getText()
    }
}



