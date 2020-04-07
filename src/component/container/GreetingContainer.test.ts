import {trigger} from "dom-sim"
import {GreetingContainer} from "./GreetingContainer"
import {GreetingTestHandles} from "../presentation/Greeting"
import {resetName} from "../../model/action/ResetNameAction"
import {expect} from "chai"
import {queryByTestHandle, renderComponentWithState} from "../../util/test/container"
import {appStateDefaults} from "../../util/test/model-defaults"

describe("GreetingContainer", () => {

    describe("when the name is clicked", () => {

        it("dispatches an reset name action", () => {
            const {mockStore, rootElement} = renderComponentWithState(GreetingContainer, appStateDefaults)
            trigger(queryByTestHandle(GreetingTestHandles.Message, rootElement), "click")

            expect(mockStore.getActions()).to.eql([resetName({})])
        })

    })

})
