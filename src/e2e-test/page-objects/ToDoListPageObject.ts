import {By, WebElement} from "selenium-webdriver"
import {testIdSelector} from "./testIdSelector";

export class ToDoListPageObject {
    constructor(private readonly host: WebElement) {}

    public async items(): Promise<ReadonlyArray<string>> {
        const element = await this.host?.findElement(By.css(testIdSelector("lol")))
        return [await element.getText()]
    }
}



