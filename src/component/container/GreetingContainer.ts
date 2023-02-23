import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../model/View"
import {Greeting, GreetingEvents, GreetingState} from "../presentation/Greeting"
import {resetName} from "../../model/Action"

export const mapStateToProps: MapStateToProps<GreetingState, {}, AppState> = state => ({
    name: state.view.name,
})

export const mapDispatchToProps: MapDispatchToProps<GreetingEvents, {}> = dispatch => ({
    nameReset: () => dispatch(resetName({})),
})


export const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting)
