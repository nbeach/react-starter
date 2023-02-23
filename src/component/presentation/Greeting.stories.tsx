import {storiesOf} from "@storybook/react"
import React from "react"
import {Greeting, GreetingEvents, GreetingState} from "./Greeting"

const state: GreetingState & GreetingEvents = {
    name: "John",
    nameReset: () => {},
}

storiesOf("Greeting", module)
    .add("default", () => <Greeting {...state}/>)
