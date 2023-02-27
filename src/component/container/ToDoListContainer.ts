import {connect, MapDispatchToProps, MapStateToProps} from "react-redux"
import {AppState} from "../../model/View"
import {ToDoList, ToDoListEvents, ToDoListState} from "../presentation/todo/ToDoList";

export const mapStateToProps: MapStateToProps<ToDoListState, {}, AppState> = state => ({
    toDoItems: state.view.todoItems
})

export const mapDispatchToProps: MapDispatchToProps<ToDoListEvents, {}> = dispatch => ({
})


export const ToDoListContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoList)
