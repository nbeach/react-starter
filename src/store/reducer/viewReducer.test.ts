import {viewReducer} from "./viewReducer"
import {expect} from "chai"
import {viewStateDefaults} from "../../util/test/model-defaults"
import {toDoItemsLoaded} from "../../model/Action"

describe("view reducer", () => {

    describe("when todoItemsLoaded action", () => {

        it("sets the todo items", () => {
            const items = [
                { id: "123", text: "Get groceries", highPriority: true }
            ]
            const newState = viewReducer(viewStateDefaults, toDoItemsLoaded({ items }))

            expect(newState.todoItems).to.eql([
                { id: 123, description: "Get groceries", important: true}
            ])
        })

    })


})
