import { before, binding, when, then } from 'cucumber-tsflow';
import * as Antiope from '../../lib/antiope';


let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

@binding()
class LandingPageSteps {
  @before()
  public beforeAllScenarios(): void {
  }

  @when(/^I visit Antiope$/)
  public WhenIVisitAntiope (): void {
    Antiope.landingPage().goTo();
  }


  @then(/^I should see the title "([^"]*)"$/)
  public ThenIShouldSeeTheTitle  (expectedTitle): void {
    return expect(Antiope.landingPage().title()).to.eventually.equal(expectedTitle)
  }

  @then(/^I should see "([^"]*)"$/)
  public ThenIShouldSee (expectedMessage): void {
    return expect(Antiope.landingPage().message.getText()).to.eventually.equal(expectedMessage)
  }
}

export = LandingPageSteps;