import { browser } from 'protractor';
export class BasePage {
  title(){ return browser.getTitle(); }
}