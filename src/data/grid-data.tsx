import { BsGithub, BsTwitter } from 'react-icons/bs';

import { FaSteam } from 'react-icons/fa';
import { GridInput } from '../../globals';

const GridData: GridInput[] = [
  {
    title: 'TVNZ',
    link: 'https://www.tvnz.co.nz/',
    image: '/images/tvnz.png',
    desc: 'I worked here as a software engineer and was part of quite a few projects.',
    tags: ['EmberJs', 'SCSS', 'AWS', 'Contentful', 'Jest', 'VideoJs'],
  },
  {
    title: 'Knowledge Website',
    link: 'https://main.d1zlnxw87p566t.amplifyapp.com',
    image: '/images/knowledge-site.png',
    'additional-links': [
      { icon: <BsGithub />, url: 'https://github.com/lmReef/knowledge-site' },
    ],
    desc: 'A website for learning random info. Stumble upon new things.',
    tags: ['NextJs', 'ReactJs', 'Typescript', 'AWS', 'Tailwind'],
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
  // TODO: add slider so can have more than 6 items here
  // {
  //   title: 'Wonder Horse',
  //   link: 'https://www.wonderhorse.co.nz/',
  //   image: '/images/wh.svg',
  //   desc: "Flippin' patties. Burnin' kitchenware.",
  //   tags: ['Cooking', 'Cleaning', 'Sinking Piss'],
  // },

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
];

export default GridData;
