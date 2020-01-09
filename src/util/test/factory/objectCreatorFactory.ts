export const objectCreatorFactory = <T>(defaults: T) => {
    return (partial: Partial<T> = {}): T => ({...defaults, ...partial})
}
