import {storiesOf} from "@storybook/react"
import React from "react"
import {Greeting, GreetingDispatchProps, GreetingStateProps} from "./Greeting"

const state: GreetingStateProps & GreetingDispatchProps = {
    name: "John",
    nameReset: () => {},
}

storiesOf(Greeting.name, module)
    .add("default", () => <Greeting {...state}/>)
