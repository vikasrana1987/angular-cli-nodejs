import { Angular2CliNodejsPage } from './app.po';

describe('angular2-cli-nodejs App', () => {
  let page: Angular2CliNodejsPage;

  beforeEach(() => {
    page = new Angular2CliNodejsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
