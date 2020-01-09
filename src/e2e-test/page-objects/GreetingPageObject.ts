import {By, WebElement} from "selenium-webdriver"
import {testHandleSelector} from "../../util/test/container-testing"
import {GreetingTestHandles} from "../../component/presentation/Greeting"

export class GreetingPageObject {
    constructor(private host: WebElement) {}

    public async name(): Promise<string> {
        const element = await this.host.findElement(By.css(testHandleSelector(GreetingTestHandles.Message)))
        return element.getText()
    }
}



