import { browser, element, by } from 'protractor';
import { BasePage } from './base.page';
export class LandingPage extends BasePage {
  message = element(by.css('h1'));

  goTo() { browser.get('YOUR URL HERE'); }

}
