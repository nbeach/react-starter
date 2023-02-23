import {GreetingContainer} from "./GreetingContainer"
import {GreetingTestId} from "../presentation/Greeting"
import {expect} from "chai"
import {appStateDefaults} from "../../util/test/model-defaults"
import {resetName} from "../../model/Action"
import {screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {renderComponentWithState} from "../../util/test/render";

describe("GreetingContainer", () => {

    describe("when the name is clicked", () => {

        it("dispatches an reset name action", async () => {
            const mockStore = renderComponentWithState(GreetingContainer, appStateDefaults)
            await userEvent.click(screen.getByTestId(GreetingTestId.Message))

            expect(mockStore.getActions()).to.eql([resetName({})])
        })

    })

})
