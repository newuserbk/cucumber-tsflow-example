import { LandingPage } from './antiope/pages/landing.page'

export {
  LandingPage,
};

export let landingPage = ():LandingPage  => { return new LandingPage() };