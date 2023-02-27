import {ToDoListContainer} from "./ToDoListContainer"
import {renderComponentWithState} from "../../util/test/render";
import {appStateDefaults} from "../../util/test/model-defaults";
import {screen, userEvent} from "@storybook/testing-library";
import {expect} from "chai";
import {ToDoListTestId} from "../presentation/todo/ToDoList";

describe("ToDoListContainer", () => {

    describe("when the name is clicked", () => {

        it("dispatches an reset name action", async () => {
            const mockStore = renderComponentWithState(ToDoListContainer, appStateDefaults)
            await userEvent.click(screen.getByTestId(ToDoListTestId.Container))

            expect(mockStore.getActions()).to.eql([])
        })

    })

})
