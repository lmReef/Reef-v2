interface GridInput {
  title: string;
  link: string | null;
  image: string;
  desc: string;
  'additional-links'?: [
    {
      text: string;
      url: string;
    },
  ];
  tags?: string[];
}
