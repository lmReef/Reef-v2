export interface GridInput {
  title: string;
  link: string | null;
  image: string;
  desc: string;
  'additional-links'?: {
    text?: string;
    icon?: JSX.Element;
    url: string;
  }[];
  tags?: string[];
}
