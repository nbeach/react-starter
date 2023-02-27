import {createActionFactory} from "../util/actionUtil"
import {ToDoItem} from "./domain";

export const toDoItemsLoaded = createActionFactory<{ readonly items: ReadonlyArray<ToDoItem>}>("TODO_ITEMS_LOADED")
export const toggleToDoItemImportantRequested = createActionFactory<{ id: number }>("TOGGLE_TODO_ITEM_IMPORTANT")