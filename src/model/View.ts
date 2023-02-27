export type AppState = {
    readonly view: ViewState
};

export type ViewState  = {
    readonly todoItems: ReadonlyArray<ToDoItemView>
};

export type ToDoItemView = {
    id: number
    readonly description: string
    readonly important: boolean
}