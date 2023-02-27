import {By, WebDriver} from "selenium-webdriver"
import {ToDoListPageObject} from "./ToDoListPageObject"
import {testIdSelector} from "./testIdSelector";
import {ToDoListTestId} from "../../component/presentation/toDoList/ToDoList";

export class AppPageObject {
    constructor(private readonly driver: WebDriver) {
    }

    public async load(timeout: number) {
        const driver = await this.driver.get("http://localhost:1234/")
        await this.driver.wait(async () => (await this.toDoList().items()).length > 0, timeout)
        return driver
    }

    public title() {
        return this.driver.getTitle()
    }

    public toDoList() {
        return new ToDoListPageObject(this.driver.findElement(By.css(testIdSelector(ToDoListTestId.Container))))
    }

}
