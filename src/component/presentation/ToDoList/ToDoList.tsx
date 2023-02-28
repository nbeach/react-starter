import React from "react"
import {ToDoItemView} from "../../../model/view";
import styled from "styled-components";
import {ToDoItem} from "./ToDoItem";

export type ToDoListState = {
    readonly toDoItems: ReadonlyArray<ToDoItemView>
};

export type ToDoListEvents = {
    readonly markItemImportantClicked: (id: number) => void
};

export const ToDoList = ({toDoItems, markItemImportantClicked}: ToDoListState & ToDoListEvents) => <ToDoListContainer data-testid={ToDoListTestId.Container}>
    { toDoItems.map(item => <ToDoItem key={item.id} item={item} markImportantClicked={markItemImportantClicked}/>) }
</ToDoListContainer>


const ToDoListContainer = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
})

export enum ToDoListTestId {
    Container = "TODO_LIST_CONTAINER",
}

