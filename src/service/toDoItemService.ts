import {ToDoItem} from "../model/domain";

export const retrieveToDoItems = (): Promise<ReadonlyArray<ToDoItem>> => {
    return Promise.resolve( [
        { id: "1", text: "Get groceries", highPriority: true },
        { id: "2", text: "Go to gym", highPriority: true },
        { id: "3", text: "Play video games", highPriority: false }
    ])
}