import { BsGithub, BsTwitter } from 'react-icons/bs';

import { FaSteam } from 'react-icons/fa';
import { GridInput } from '../../globals';

const GridData: GridInput[] = [
  {
    title: 'NetValue',
    link: 'https://www.netvalue.nz/',
    image: '/images/nv.png',
    desc: 'I work here as a full-time contractor for US-based genomics company: Tempus.',
    tags: ['Python', 'Nextflow', 'Groovy', 'Google Cloud', 'Bash', 'Linux'],
  },
  {
    title: 'TVNZ',
    link: 'https://www.tvnz.co.nz/',
    image: '/images/tvnz.png',
    desc: 'I worked here as a software engineer and was part of quite a few projects.',
    tags: [
      'EmberJs',
      'ReactJs',
      'SCSS',
      'AWS',
      'Contentful',
      'Jest',
      'VideoJs',
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
    title: 'Warja Game',
    link: 'https://store.steampowered.com/app/2433360/Warja/',
    image: '/images/warja.png',
    'additional-links': [
      {
        icon: <FaSteam />,
        url: 'https://store.steampowered.com/app/2433360/Warja/',
      },
      { icon: <BsTwitter />, url: 'https://twitter.com/ReefMakeGame' },
    ],
    desc: 'A pixel art roguelite tower defence game I am currently working on.',
    tags: ['Godot 4.0', 'GDScript', 'Steam APIs', 'Game Dev', 'WIP'],
  },
  {
    title: 'Wiki Site',
    link: 'https://wiki.reefmatson.com',
    image: '/images/knowledge-site.png',
    'additional-links': [
      { icon: <BsGithub />, url: 'https://github.com/lmReef/knowledge-site' },
    ],
    desc: 'An alternative wikipedia frontend for learning random info. Stumble upon new things.',
    tags: ['NextJs', 'ReactJs', 'Typescript', 'AWS', 'Tailwind', 'SCSS'],
  },
  {
    title: 'This Site',
    link: '/',
    image: '/images/splash.svg',
    desc: 'waawawaaa filler text',
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
  // TODO: add slider so can have more than 6 items here
  // {
  //   title: 'Wonder Horse',
  //   link: 'https://www.wonderhorse.co.nz/',
  //   image: '/images/wh.svg',
  //   desc: "Flippin' patties. Burnin' kitchenware.",
  //   tags: ['Cooking', 'Cleaning', 'Sinking Piss'],
  // },
  // {
  //   title: 'Drink Tailor',
  //   link: 'https://drinktailor.net/',
  //   image: '/images/drink-tailor.png',
  //   desc: 'A cocktail recipe site I made for fun. Website is currently offline.',
  //   'additional-links': [
  //     { icon: <BsGithub />, url: 'https://github.com/lmReef/drink-tailor' },
  //   ],
  //   tags: ['ReactJs', 'Redux', 'NextJs', 'Typescript', 'AWS'],
  // },
];

export default GridData;
