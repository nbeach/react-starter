import {storiesOf} from "@storybook/react"
import React from "react"
import {ToDoList, ToDoListEvents, ToDoListState} from "./ToDoList";

const state: ToDoListState & ToDoListEvents = {
    toDoItems: [
        { id: 1, description: "Get groceries", important: true },
        { id: 2, description: "Go to gym", important: true },
        { id: 3, description: "Play video games", important: false },
    ],
    markItemImportantClicked: () => {}
}

storiesOf("ToDo List", module)
    .add("default", () => <ToDoList {...state}/>)
