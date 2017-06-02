import { AngularFirstProjectPage } from './app.po';

describe('angular-first-project App', () => {
  let page: AngularFirstProjectPage;

  beforeEach(() => {
    page = new AngularFirstProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
