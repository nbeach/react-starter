import React from "react"

export interface GreetingStateProps {
    readonly name: string
}

export interface GreetingDispatchProps {
    readonly nameReset: () => void
}

export const Greeting = (props: GreetingStateProps & GreetingDispatchProps) => <div data-test-handle={GreetingTestHandles.Container}>
    <div onClick={() => props.nameReset()} data-test-handle={GreetingTestHandles.Message}>Hello {props.name}</div>
</div>

export enum GreetingTestHandles {
    Container = "GREETING_CONTAINER",
    Message = "GREETING_MESSAGE",
}
