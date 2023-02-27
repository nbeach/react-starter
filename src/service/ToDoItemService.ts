import {ToDoItem} from "../model/Domain";

export const retrieveToDoItems = (): Promise<ReadonlyArray<ToDoItem>> => {
    return Promise.resolve( [
        { id: "123", text: "Get groceries", highPriority: true }
    ])
}
