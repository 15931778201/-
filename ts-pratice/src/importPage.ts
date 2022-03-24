import { Header, Content, Footer } from "./importComp";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}