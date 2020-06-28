import {GreetingPageObject} from "./GreetingPageObject"
import {GreetingTestIds} from "../../component/presentation/Greeting"
import {testIdSelector} from "../../util/test/container"

export class AppPageObject {

    load() {
        cy.visit("localhost:1234")
    }

    title() {
        return cy.title()
    }

    greeting() {
        return new GreetingPageObject(cy.get(testIdSelector(GreetingTestIds.Container)))
    }

}
