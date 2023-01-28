import { BsGithub, BsTwitter } from 'react-icons/bs';

import { GridInput } from '../../globals';

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
    desc: 'A cocktail recipe site I made for fun. Website is currently offline.',
    'additional-links': [
      { icon: <BsGithub />, url: 'https://github.com/lmReef/drink-tailor' },
    ],
    tags: ['ReactJs', 'Redux', 'NextJs', 'Typescript', 'AWS'],
  },
  {
    title: 'This Site',
    link: '/',
    image: '/images/rp.png',
    desc: 'My personal portfolio site.',
    'additional-links': [
      { icon: <BsGithub />, url: 'https://github.com/lmReef/Reef-v2' },
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
  {
    title: 'TD Game',
    link: 'https://twitter.com/ReefMakeGames',
    image: '/images/td-game.png',
    'additional-links': [
      { icon: <BsTwitter />, url: 'https://twitter.com/ReefMakeGames' },
    ],
    desc: 'A pixel art roguelite tower defence game I am currently working on.',
    tags: ['Godot 4.0', 'GDScript', 'Game Dev', 'WIP'],
  },
];

export default GridData;
