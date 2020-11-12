import {GreetingContainer} from "./GreetingContainer"
import {GreetingTestId} from "../presentation/Greeting"
import {expect} from "chai"
import {renderComponentWithState} from "../../util/test/container"
import {appStateDefaults} from "../../util/test/model-defaults"
import {resetName} from "../../model/Action"
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe("GreetingContainer", () => {

    describe("when the name is clicked", () => {

        it("dispatches an reset name action", () => {
            const mockStore = renderComponentWithState(GreetingContainer, appStateDefaults)
            userEvent.click(screen.getByTestId(GreetingTestId.Message))

            expect(mockStore.getActions()).to.eql([resetName({})])
        })

    })

})
