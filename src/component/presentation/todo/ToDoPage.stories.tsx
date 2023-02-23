import {storiesOf} from "@storybook/react"
import React from "react"
import {ToDoPage, ToDoPageEvents, ToDoPageState} from "./ToDoPage";

const state: ToDoPageState & ToDoPageEvents = {
    toDoItems: [
        { id: 1, description: "Get groceries", important: true },
        { id: 2, description: "Go to gym", important: true },
        { id: 3, description: "Play video games", important: false },
    ]
}

storiesOf("ToDo Page", module)
    .add("default", () => <ToDoPage {...state}/>)
