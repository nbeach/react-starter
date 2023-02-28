import {By, WebElement} from "selenium-webdriver"
import {testIdSelector} from "./testIdSelector";
import {ToDoItemTestId} from "../../component/presentation/ToDoList/ToDoItem";

export class ToDoItemPageObject {
    constructor(private readonly host: WebElement) {}

    public async description(): Promise<string> {
        const element = await this.host.findElement(By.css(testIdSelector(ToDoItemTestId.Description)))
        return await element.getText()
    }
}



