import React from "react"
import {GreetingContainer} from "./GreetingContainer"
import {GreetingTestIds} from "../presentation/Greeting"
import {expect} from "chai"
import {renderComponentWithState} from "../../util/test/container"
import {appStateDefaults} from "../../util/test/model-defaults"
import {resetName} from "../../model/Action"
import {fireEvent, screen} from "@testing-library/react"

describe("GreetingContainer", () => {

    describe("when the name is clicked", () => {

        it("dispatches an reset name action", () => {
            const {mockStore} = renderComponentWithState(<GreetingContainer/>, appStateDefaults)

            fireEvent.click(screen.getByTestId(GreetingTestIds.Message))

            expect(mockStore.getActions()).to.eql([resetName({})])
        })

    })

})
