import React from "react"
import {ToDoItemView} from "../../../model/View";
import {ToDoList} from "./ToDoList";

export type ToDoPageState = {
    readonly toDoItems: ReadonlyArray<ToDoItemView>
};

export type ToDoPageEvents = {
};

export const ToDoPage = ({toDoItems}: ToDoPageState & ToDoPageEvents) => <div data-testid={ToDoPageTestId.Container}>
    <ToDoList toDoItems={toDoItems}/>
</div>



export enum ToDoPageTestId {
    Container = "GREETING_CONTAINER",
    Message = "GREETING_MESSAGE",
}
