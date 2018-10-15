export default interface INavigationPage {
  title: string;
  url: string;
  order?: number;
  children?: Array<INavigationPage>;
}
