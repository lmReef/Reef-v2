interface GridInput {
  title: string;
  link: string;
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
