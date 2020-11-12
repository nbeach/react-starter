import React from "react"

export interface GreetingStateProps {
    readonly name: string
}

export interface GreetingDispatchProps {
    readonly nameReset: () => void
}

export const Greeting = (props: GreetingStateProps & GreetingDispatchProps) => <div data-testid={GreetingTestId.Container}>
    <div onClick={() => props.nameReset()} data-testid={GreetingTestId.Message}>Hello {props.name}</div>
</div>

export enum GreetingTestId {
    Container = "GREETING_CONTAINER",
    Message = "GREETING_MESSAGE",
}
