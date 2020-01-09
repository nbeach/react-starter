import moment from "moment"

export const pollUntilTrue = async (predicate: () => Promise<boolean>, timeout: number = 1000) => {
    const startTime = moment()

    while (!await predicate()) {
        const timeDifference = moment().diff(startTime)
        const msElapsed =  moment.duration(timeDifference).asMilliseconds()
        if (msElapsed >= timeout) { throw new Error("Polling timeout exceeded") }
        await sleep(100)
    }
}


export const sleep = (milliseconds: number) => new Promise(resolve => setTimeout(resolve, milliseconds))
