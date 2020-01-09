import {storiesOf} from "@storybook/react"
import React from "react"
import {App} from "./App"
import {STORY_STATE} from "../StoryState"
import {mockStateStore} from "../../util/test/container-testing"
import {Provider} from "react-redux"

storiesOf(App.name, module)
    .add("default", () => <Provider store={mockStateStore(STORY_STATE)}><App/></Provider>)
