import { HelloNg2AgainPage } from './app.po';

describe('hello-ng2-again App', function() {
  let page: HelloNg2AgainPage;

  beforeEach(() => {
    page = new HelloNg2AgainPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
