import {GreetingTestIds} from "../../component/presentation/Greeting"
import {testIdSelector} from "../../util/test/container"

export class GreetingPageObject {
    constructor(private host: any) {}

    public name() {
        return this.host.get(testIdSelector(GreetingTestIds.Message))
    }
}



