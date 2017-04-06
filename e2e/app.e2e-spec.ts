import { HgUtmPage } from './app.po';

describe('hg-utm App', () => {
  let page: HgUtmPage;

  beforeEach(() => {
    page = new HgUtmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
