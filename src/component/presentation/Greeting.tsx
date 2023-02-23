import React from "react"
import styled from "styled-components";

export type GreetingState = {
    readonly name: string
};

export type GreetingEvents = {
    readonly nameReset: () => void
};

export const Greeting = (props: GreetingState & GreetingEvents) => <div data-testid={GreetingTestId.Container}>
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
