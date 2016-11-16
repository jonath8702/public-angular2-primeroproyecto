import { TallerAngularPage } from './app.po';

describe('taller-angular App', function() {
  let page: TallerAngularPage;

  beforeEach(() => {
    page = new TallerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
