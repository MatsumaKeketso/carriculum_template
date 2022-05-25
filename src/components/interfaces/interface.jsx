export interface TITLE_DESC {
  title: string;
  description: string;
}
export interface TITLE_LIST {
  title: string;
  [index: number]: { title: string, link: string };
}
