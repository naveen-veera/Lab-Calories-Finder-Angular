import { DataBindingAngularNutritionAppPage } from './app.po';

describe('data-binding-angular-nutrition-app App', () => {
  let page: DataBindingAngularNutritionAppPage;

  beforeEach(() => {
    page = new DataBindingAngularNutritionAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
