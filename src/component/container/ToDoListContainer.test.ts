import {ToDoListContainer} from "./ToDoListContainer"
import {renderComponentWithState} from "../../util/test/render";
import {appStateDefaults} from "../../util/test/modelDefaults";
import {screen, userEvent} from "@storybook/testing-library";
import {expect} from "chai";
import {AppState} from "../../model/view";
import {toggleToDoItemImportantRequested} from "../../model/action";
import {ToDoItemTestId} from "../presentation/ToDoList/ToDoItem";

describe("ToDoListContainer", () => {

    describe("when a to do item description is clicked", () => {

        it("dispatches a mark important action", async () => {
            const state: AppState = {
                ...appStateDefaults,
                view: {
                    ...appStateDefaults.view,
                    toDoItems: [
                        { id: 1, description: "Get groceries", important: true },
                        { id: 2, description: "Go to gym", important: true },
                        { id: 3, description: "Play video games", important: false },
                    ]
                }
            }

            const mockStore = renderComponentWithState(ToDoListContainer, state)
            const secondItem = screen.getAllByTestId(ToDoItemTestId.Description)[1]
            await userEvent.click(secondItem)

            expect(mockStore.getActions()).to.eql([toggleToDoItemImportantRequested({ id: 2 })])
        })

    })

})