import { browser, element, by } from 'protractor';
export class LandingPage {

  message = element(by.css('h1'));

  title(){ return browser.getTitle(); }

  goTo() {
    browser.get('YOUR URL HERE');
  }

}
