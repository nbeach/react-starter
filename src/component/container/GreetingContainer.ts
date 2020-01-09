import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../model/AppState"
import {Greeting, GreetingDispatchProps, GreetingStateProps} from "../presentation/Greeting"
import {resetName} from "../../model/action/ResetNameAction"

export const mapStateToProps: MapStateToProps<GreetingStateProps, void, AppState> = state => ({
    name: state.view.name,
})

export const mapDispatchToProps: MapDispatchToProps<GreetingDispatchProps, void> = dispatch => ({
    nameReset: () => dispatch(resetName({})),
})


export const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting)
