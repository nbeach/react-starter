import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../model/View"
import {ToDoList, ToDoListEvents, ToDoListState} from "../presentation/todo/ToDoList";
import {toggleToDoItemImportantRequested} from "../../model/Action";

export const mapStateToProps: MapStateToProps<ToDoListState, {}, AppState> = state => ({
    toDoItems: state.view.toDoItems
})

export const mapDispatchToProps: MapDispatchToProps<ToDoListEvents, {}> = dispatch => ({
    markItemImportantClicked: (id) => dispatch(toggleToDoItemImportantRequested({ id}))
})


export const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
