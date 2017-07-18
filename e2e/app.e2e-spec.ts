import { ViewChildPage } from './app.po';

describe('view-child App', () => {
  let page: ViewChildPage;

  beforeEach(() => {
    page = new ViewChildPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
