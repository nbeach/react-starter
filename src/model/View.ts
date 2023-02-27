export type AppState = {
    readonly view: ViewState
};

export type ViewState  = {
    readonly toDoItems: ReadonlyArray<ToDoItemView>
};

export type ToDoItemView = {
    id: number
    readonly description: string
    readonly important: boolean
}