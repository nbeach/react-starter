import {Action} from "redux"

export type ActionFactory<T> = {
    (parameters: T): Action & T

    readonly type: string
};

export const createActionFactory = <T = {}>(type: string): ActionFactory<T> => {
    const factory = (parameters: T) => ({type, ...parameters})
    // eslint-disable-next-line functional/immutable-data
    factory.type = type
    return factory
}

export const isAction = <T>(factory: ActionFactory<T>, action: Action | T): action is T => {
    return (action as Action).type === factory.type
}
