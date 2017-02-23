import { before, binding, when, then } from 'cucumber-tsflow';
import * as Antiope from '../../lib/antiope';
import { browser } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
let landingPage: Antiope.LandingPage;

@binding()
class LandingPageSteps {
  @before()
  public beforeAllScenarios(): void {
    landingPage = new Antiope.LandingPage();
  }

  @when(/^I visit Antiope$/)
  public WhenIVisitAntiope (): void {
    landingPage.goTo();
  }


  @then(/^I should see the title "([^"]*)"$/)
  public ThenIShouldSeeTheTitle  (expectedTitle): void {
    return expect(landingPage.title()).to.eventually.equal(expectedTitle)
  }

  @then(/^I should see "([^"]*)"$/)
  public ThenIShouldSee (expectedMessage): void {
    return expect(landingPage.message.getText()).to.eventually.equal(expectedMessage)
  }
}

export = LandingPageSteps;