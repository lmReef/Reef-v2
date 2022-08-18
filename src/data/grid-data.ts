const GridData: GridInput[] = [
  {
    title: 'TVNZ',
    link: 'https://www.tvnz.co.nz/',
    image: '/images/tvnz.png',
    desc: 'I currently work here as a software engineer and have been apart of quite a few projects.',
    tags: ['EmberJs', 'SCSS', 'AWS', 'Contentful', 'Jest', 'VideoJs'],
  },
  {
    title: 'Drink Tailor',
    link: 'https://drinktailor.net/',
    image: '/images/drink-tailor.png',
    desc: 'A cocktail recipe site I made for fun.',
    'additional-links': [
      { text: 'github', url: 'https://github.com/lmReef/drink-tailor' },
    ],
    tags: ['ReactJs', 'Redux', 'NextJs', 'Typescript', 'AWS'],
  },
  {
    title: 'This Site',
    link: '/',
    image: '/images/rp.png',
    desc: 'My personal portfolio site.',
    'additional-links': [
      { text: 'github', url: 'https://github.com/lmReef/Reef-v2' },
    ],
    tags: [
      'ReactJs',
      'Typescript',
      'NextJs',
      'Styled-Components',
      'AWS',
      'FullPageJs',
    ],
  },
  {
    title: '1News',
    link: 'https://www.1news.co.nz/',
    image: '/images/1news.png',
    desc: 'I worked to rewrite the 1News website in React.',
    tags: ['ReactJs', 'SCSS', 'AWS', 'ARC', 'Jest', 'Enzyme', 'VideoJs'],
  },
  {
    title: 'Wonder Horse',
    link: 'https://www.wonderhorse.co.nz/',
    image: '/images/wh.svg',
    desc: "Flippin' patties. Burnin' kitchenware.",
    tags: ['Cooking', 'Cleaning', 'Sinking Piss'],
  },
];

export default GridData;
