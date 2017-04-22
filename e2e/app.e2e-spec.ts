import { DebtsPage } from './app.po';

describe('debts App', () => {
  let page: DebtsPage;

  beforeEach(() => {
    page = new DebtsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
