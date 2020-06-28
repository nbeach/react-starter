import { AppPageObject } from './page-objects/AppPageObject'

describe('the app', () => {
  let application

  before(() => {
    application = new AppPageObject()
    application.load()
  })

  it('has a title', () => {
    application.title().should('eq', 'Example App')
  })

  it('displays a greeting', () => {
    application.greeting().name().contains('Hello John')
  })
})
