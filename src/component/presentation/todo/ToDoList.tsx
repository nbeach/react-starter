import React from "react"
import {ToDoItemView} from "../../../model/View";
import styled from "styled-components";

export type ToDoListState = {
    readonly toDoItems: ReadonlyArray<ToDoItemView>
};

export type ToDoListEvents = {
};

export const ToDoList = ({toDoItems}: ToDoListState & ToDoListEvents) => <ToDoListContainer data-testid={ToDoListTestId.Container}>
    { toDoItems.map(item => <ToDoItem item={item}/>) }
</ToDoListContainer>


const ToDoListContainer = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
})

const ToDoItem = ({item}: { item: ToDoItemView}) => <ToDoItemContainer>
    <div>{item.description}</div> {item.important ? <div>!</div> : ""}
</ToDoItemContainer>

const ToDoItemContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
})

export enum ToDoListTestId {
    Container = "TODO_LIST_CONTAINER",
}
