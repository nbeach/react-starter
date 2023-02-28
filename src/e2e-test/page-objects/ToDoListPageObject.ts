import {By, WebElement} from "selenium-webdriver"
import {testIdSelector} from "./testIdSelector";
import {ToDoItemPageObject} from "./ToDoItemPageObject";
import {ToDoItemTestId} from "../../component/presentation/ToDoList/ToDoItem";

export class ToDoListPageObject {
    constructor(private readonly host: WebElement) {}

    public async items(): Promise<ReadonlyArray<ToDoItemPageObject>> {
        const itemElements = await this.host.findElements(By.css(testIdSelector(ToDoItemTestId.Container)))
        return itemElements.map(element => new ToDoItemPageObject(element))
    }
}



