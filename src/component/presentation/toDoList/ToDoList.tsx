import React from "react"
import {ToDoItemView} from "../../../model/view";
import styled from "styled-components";

export type ToDoListState = {
    readonly toDoItems: ReadonlyArray<ToDoItemView>
};

export type ToDoListEvents = {
    readonly markItemImportantClicked: (id: number) => void
};

export const ToDoList = ({toDoItems, markItemImportantClicked}: ToDoListState & ToDoListEvents) => <ToDoListContainer data-testid={ToDoListTestId.Container}>
    { toDoItems.map(item => <ToDoItem item={item} markImportantClicked={markItemImportantClicked}/>) }
</ToDoListContainer>


const ToDoListContainer = styled.div({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
})

const ToDoItem = ({item, markImportantClicked}: { item: ToDoItemView, markImportantClicked: (id: number) => void }) =>
    <ToDoItemContainer data-testid={ToDoItemTestId.Container}>
        <div onClick={() => markImportantClicked(item.id)} data-testid={ToDoItemTestId.Description}>
            {item.description}
        </div>
        {item.important ? <div>!</div> : ""}
    </ToDoItemContainer>

const ToDoItemContainer = styled.div({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
})

export enum ToDoListTestId {
    Container = "TODO_LIST_CONTAINER",
}

export enum ToDoItemTestId {
    Container = "TODO_ITEM_CONTAINER",
    Description = "TODO_ITEM_DESCRIPTION",
}
