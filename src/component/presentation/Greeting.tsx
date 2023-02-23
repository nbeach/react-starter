import React from "react"
import styled from "styled-components";

export type GreetingStateProps = {
    readonly name: string
};

export type GreetingDispatchProps = {
    readonly nameReset: () => void
};

export const Greeting = (props: GreetingStateProps & GreetingDispatchProps) => <div data-testid={GreetingTestId.Container}>
    <FancyHeader onClick={() => props.nameReset()} data-testid={GreetingTestId.Message}>Hello {props.name}</FancyHeader>
</div>


const FancyHeader = styled.h1({
    color: "green",
    fontFamily: "sans-serif",
})

export enum GreetingTestId {
    Container = "GREETING_CONTAINER",
    Message = "GREETING_MESSAGE",
}
