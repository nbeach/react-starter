import {queryByTestHandle, renderComponentWithState} from "../../util/test/container-testing"
import {trigger} from "dom-sim"
import {createAppState} from "../../util/test/factory/createAppState"
import {GreetingContainer} from "./GreetingContainer"
import {GreetingTestHandles} from "../presentation/Greeting"
import {resetName} from "../../model/action/ResetNameAction"

describe(GreetingContainer.name, () => {

    describe("when the name is clicked", () => {

        it("dispatches an reset name action", () => {
            const {mockStore, rootElement} = renderComponentWithState(GreetingContainer, createAppState())
            trigger(queryByTestHandle(GreetingTestHandles.Message, rootElement), "click")

            expect(mockStore.getActions()).toEqual([resetName({})])
        })

    })

})
