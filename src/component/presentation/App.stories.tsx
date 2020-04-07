import {storiesOf} from "@storybook/react"
import React from "react"
import {App} from "./App"
import {STORY_STATE} from "../StoryState"
import {Provider} from "react-redux"
import {mockStateStore} from "../../util/test/container"

storiesOf("App", module)
    .add("default", () => <Provider store={mockStateStore(STORY_STATE)}><App/></Provider>)
