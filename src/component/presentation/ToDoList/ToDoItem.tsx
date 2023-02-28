import styled from "styled-components";
import {ToDoItemView} from "../../../model/view";
import React from "react";


export const ToDoItem = ({item, markImportantClicked}: { item: ToDoItemView, markImportantClicked: (id: number) => void }) =>
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
export enum ToDoItemTestId {
    Container = "TODO_ITEM_CONTAINER",
    Description = "TODO_ITEM_DESCRIPTION",
}
