import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../model/view"
import {ToDoList, ToDoListEvents, ToDoListState} from "../presentation/ToDoList/ToDoList";
import {toggleToDoItemImportantRequested} from "../../model/action";

export const mapStateToProps: MapStateToProps<ToDoListState, {}, AppState> = state => ({
    toDoItems: state.view.toDoItems
})

export const mapDispatchToProps: MapDispatchToProps<ToDoListEvents, {}> = dispatch => ({
    markItemImportantClicked: (id) => dispatch(toggleToDoItemImportantRequested({ id}))
})


export const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
