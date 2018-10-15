import INavigationPage from './InavigationPage'

export default class NavigationPage implements INavigationPage {
  title: string;
  url: string;
  order: number;
  children?: Array<INavigationPage>;

  constructor(data: INavigationPage) {
    this.title = data.title;
    this.url = data.url;
    this.order = data.order;
    this.children = data.children;
  }
}
