import {connect} from "react-redux"
import {Greeting} from "../presentation/Greeting"
import {action, RESET_NAME} from "../../model/Action";

export const mapStateToProps = state => ({
    name: state.view.name,
})

export const mapDispatchToProps = dispatch => ({
    nameReset: () => dispatch(action(RESET_NAME)),
})


export const GreetingContainer = connect(mapStateToProps, mapDispatchToProps)(Greeting)
