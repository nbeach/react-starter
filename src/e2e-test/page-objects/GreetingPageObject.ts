import {By, WebElement} from "selenium-webdriver"
import {GreetingTestHandles} from "../../component/presentation/Greeting"
import {testHandleSelector} from "../../util/test/container"

export class GreetingPageObject {
    constructor(private host: WebElement) {}

    public async name(): Promise<string> {
        const element = await this.host.findElement(By.css(testHandleSelector(GreetingTestHandles.Message)))
        return element.getText()
    }
}



