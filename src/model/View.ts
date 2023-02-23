export type AppState = {
    readonly view: ViewState
};

export type ViewState  = {
    readonly name: string
};

export type ToDoItemView = {
    id: number
    readonly description: string
    readonly important: boolean
}