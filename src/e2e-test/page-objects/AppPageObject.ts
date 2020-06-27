import {GreetingPageObject} from "./GreetingPageObject"
import {GreetingTestIds} from "../../component/presentation/Greeting"
import {testIdSelector} from "../../util/test/container"

export class AppPageObject {

    public async load() {
        cy.visit("localhost:1234")
    }

    public title() {
        return cy.title()
    }

    public greeting() {
        return new GreetingPageObject(cy.get(testIdSelector(GreetingTestIds.Container)))
    }

}
