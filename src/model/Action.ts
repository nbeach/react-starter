import {createActionFactory} from "../util/action-util"
import {ToDoItem} from "./Domain";

export const toDoItemsLoaded = createActionFactory<{ readonly items: ReadonlyArray<ToDoItem>}>("TODO_ITEMS_LOADED")
