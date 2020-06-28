import {GreetingTestIds} from "../../component/presentation/Greeting"
import {testIdSelector} from "../../util/test/container"

export class GreetingPageObject {
    constructor(host) {
        this.host = host
    }

    name() {
        return this.host.get(testIdSelector(GreetingTestIds.Message))
    }
}



