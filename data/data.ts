import {
  hillel,
  khpi,
  donnuet,
  dizhka,
  cv_website,
  fresh_news,
  match_game,
  store,
  randm,
  gallery,
  converter,
  html,
  css,
  sass,
  javascript,
  react,
  git,
  typescript,
  node,
  next,
  redux,
  mui,
  chakraui,
  styledcomponents,
  reacthookform,
  jquerry,
  webpack,
  npm,
  figma,
  photoshop,
  github_social,
  instagram_social,
  linkedin_social,
  telegram_social,
} from '@/assets/images';

export const chess = 'https://www.chess.com/member/walgul';
export const leetcode = 'https://leetcode.com/Eugenist/';

export const menuItems = [
  { id: 0, label: 'Home', url: '/' },
  { id: 1, label: 'CV', url: '/cv' },
  { id: 2, label: 'About', url: '/cv/about' },
  { id: 3, label: 'Skills', url: '/cv/skills' },
  { id: 4, label: 'Education', url: '/cv/education' },
  { id: 5, label: 'Projects', url: '/cv/projects' },
  { id: 6, label: 'Contacts', url: '/cv/contacts' },
];

export const cerificates = [
  {
    id: 0,
    title: 'Hillel IT School',
    description: 'Frontend Basic (HTML, CSS/SCSS)',
    link: 'https://certificate.ithillel.ua/view/44227142',
  },
  {
    id: 1,
    title: 'Hillel IT School',
    description: 'Frontend Pro (JavaScript, React)',
    link: 'https://certificate.ithillel.ua/ru/view/12754162',
  },
];

export const projects = [
  {
    id: 0,
    title: 'Dizhka Store',
    subtitle: 'eCommerce Application',
    description:
      'Web eCommerce Store. Experience a stunning design and user-friendly interface! Choose products, use filters, view detailed information on individual product pages. Add what you like to your cart and make purchases through a convenient form! Alternatively, add to favorites and come back later!',
    technologies: [
      'React',
      'Redux',
      'Chakra UI',
      'AXIOS',
      'Redux Persist',
      'React Hook Form',
      'Styled Components',
      'NodeJS',
      'Express',
    ],
    links: [
      'https://github.com/Eugeneist/Dizhka-Store',
      'https://eugeneist.github.io/Dizhka-Store/',
    ],
    picture: dizhka,
  },
  {
    id: 1,
    title: 'CV Website',
    subtitle: 'CV website',
    description:
      'Personal website or web CV site. Get to know the developer, explore their work, assess skills, reach out, and inquire about opportunities. Dont miss the chance to propose an offer!',
    technologies: ['React', 'Next.js', 'TypeScript', 'SCSS modules'],
    links: [
      'https://github.com/Eugeneist/web_cv_project',
      'https://github.com/Eugeneist/web_cv_project',
    ],
    picture: cv_website,
  },
  {
    id: 2,
    title: 'Fresh News App',
    subtitle: 'Small news application',
    description:
      'Small news app! Stay informed with the latest world news, filter articles, and read interesting tidbits.',
    technologies: [
      'React',
      'TypeScript',
      'Redux',
      'Material UI',
      'SCSS modules',
      'AXIOS',
      'React Router',
    ],
    links: [
      'https://github.com/Eugeneist/fresh-news',
      'https://eugeneist.github.io/fresh-news/',
    ],
    picture: fresh_news,
  },
  {
    id: 3,
    title: 'The Match Game',
    subtitle: 'The Match game fun application',
    description:
      'Small game. Two people are playing a game. From the pile of 25 matches, each player takes either 1, 2 or 3 matches on each turn. The game is over once all matches are taken. Whoever has the even amount of matches wins.',
    technologies: ['React', 'TypeScript', 'Material UI', 'React Router'],
    links: [
      'https://github.com/Eugeneist/test_task_native',
      'https://thematchgame.netlify.app/',
    ],
    picture: match_game,
  },
  {
    id: 4,
    title: 'eCommerce Store',
    subtitle: 'eCommerce App or just an online store.',
    description:
      'Сhoose products by category, see their personal page, add to favorites and just buy!',
    technologies: [
      'React',
      'JavaScript',
      'Material UI',
      'React Router / HashRouter',
      'Redux Persisit',
      'React Hook Form',
      'AXIOS',
    ],
    links: [
      'https://github.com/Eugeneist/eCommerce-App',
      'https://eugeneist.github.io/eCommerce-App/',
    ],
    picture: store,
  },
  {
    id: 5,
    title: 'Rick and Morty App',
    subtitle: 'small app, test task',
    description:
      'Fun Rick and Morty application. Filter characters and discover them! Login by google.',
    technologies: [
      'React',
      'TypeScript',
      'react-oauth',
      'jwt-decode',
      'AXIOS',
      'React Router',
      'SCSS modules',
    ],
    links: [
      'https://github.com/Eugeneist/r_and_m_test',
      'https://eugeneist.github.io/r_and_m_test/',
    ],
    picture: randm,
  },
  {
    id: 6,
    title: 'Photo Gallery',
    subtitle: 'Photo Gallery application',
    description:
      'Discover photos, add to favorites. One more small app for test task',
    technologies: [
      'React',
      'Styled Components',
      'AXIOS',
      'React Router / Hash Router',
      'React Persist',
    ],
    links: [
      'https://github.com/Eugeneist/photo-gallery',
      'https://eugeneist.github.io/photo-gallery',
    ],
    picture: gallery,
  },
  {
    id: 7,
    title: 'Currency Converter',
    subtitle: 'Converter application',
    description:
      'My very first pet project. Calculate your currency simple and fast!',
    technologies: ['React', 'Styled Components', 'AXIOS'],
    links: [
      'https://github.com/Eugeneist/Currency-Converter-App',
      'https://eugeneist.github.io/Currency-Converter-App/',
    ],
    picture: converter,
  },
];

export const education = [
  {
    id: 0,
    title:
      'Donetsk National University of Economics and Trade named after M. Tugan-Baranovsky',
    text: 'Mechanical Engineering',
    date: { start: '2012', end: '2015' },
    image: donnuet,
  },
  {
    id: 1,
    title: 'National Technical University «Kharkiv Polytechnic Institute»',
    text: 'Mechanical Engineering, Masters Degree',
    date: { start: '2015', end: '2018' },
    image: khpi,
  },
  {
    id: 2,
    title: 'Hillel IT School',
    text: 'Frontend Basic course (HTML, CSS)',
    date: { start: '2021' },
    image: hillel,
    link: {
      url: 'https://certificate.ithillel.ua/view/44227142',
      name: 'Certificate',
    },
  },
  {
    id: 3,
    title: 'Hillel IT School',
    text: 'Frontend Pro course (JavaScript, React)',
    date: { start: '2022' },
    image: hillel,
    link: {
      url: 'https://certificate.ithillel.ua/ru/view/12754162',
      name: 'Certificate',
    },
  },
];

export const skills = {
  development: [
    {
      id: 0,
      title: 'HTML',
      description:
        'HyperText Markup Language. This is like the skeleton of a webpage. It structures the content, like text, images, and tables, so your browser knows how to display them.',
      image: html,
    },
    {
      id: 1,
      title: 'CSS',
      description:
        '(Cascading Style Sheets). Imagine it as the wardrobe for your webpage. It styles and makes your webpage look good, changing colors, fonts, and layouts.',
      image: css,
    },
    {
      id: 2,
      title: 'SCSS/SASS',
      description:
        'These are like advanced versions of CSS. They make styling even more powerful and efficient.',
      image: sass,
    },
    {
      id: 3,
      title: 'JavaScript',
      description:
        'Programming language. Think of it as the brain of your webpage. It adds interactivity, making things like buttons, forms, and animations work.',
      image: javascript,
    },
    {
      id: 4,
      title: 'TypeScript',
      description:
        'Programming language. Its like a safety net for JavaScript. It helps catch errors and makes your code more reliable.',
      image: typescript,
    },
    {
      id: 5,
      title: 'Next.js',
      description:
        'Framework. This is like a set of tools that makes it easier to build complex web applications.',
      image: `${next.src}`,
    },
    {
      id: 6,
      title: 'Node.js',
      description:
        'Its like the backstage crew for your web applications, making sure everything runs smoothly.',
      image: node,
    },
  ],
  libraries: [
    {
      id: 7,
      title: 'React',
      description:
        'JavaScript library. Picture it as a toolbox for building user interfaces on the web. It helps make your webpage more interactive.',
      image: react,
    },
    {
      id: 8,
      title: 'Redux',
      description:
        'State management library. Its like a manager for the data in your application, making sure everything is organized.',
      image: redux,
    },
    {
      id: 9,
      title: 'Material UI',
      description:
        'User interface library. These are like pre-designed building blocks to make your webpage look good without starting from scratch.',
      image: mui,
    },
    {
      id: 10,
      title: 'Chakra UI',
      description:
        'User interface library. These are like pre-designed building blocks to make your webpage look good without starting from scratch.',
      image: chakraui,
    },
    {
      id: 11,
      title: 'Styled Components',
      description:
        'Styling CSS in JS. Its a way to style your webpage by writing code, like adding decorations to your house with a magic wand.',
      image: styledcomponents,
    },
    {
      id: 12,
      title: 'React Hook Form',
      description:
        'React library for custom forms. Imagine it as a helper for dealing with forms on your webpage.',
      image: reacthookform,
    },
    {
      id: 13,
      title: 'JQuerry',
      description:
        'Think of it as an old library of shortcuts for doing common things on the web, like turning lights on and off with a clapper.',
      image: jquerry,
    },
  ],
  tools: [
    {
      id: 14,
      title: 'GIT',
      description:
        'Version control system. Its like a time machine for your code, allowing you to go back to different versions if something goes wrong.',
      image: git,
    },
    {
      id: 15,
      title: 'Webpack',
      description:
        'Package manager. Imagine it as a super organized backpack for all your code, making sure everything you need is packed efficiently.',
      image: webpack,
    },
    {
      id: 16,
      title: 'NPM',
      description:
        'Node package manager. Its like a delivery service for code, making sure you get the right packages to build your website.',
      image: npm,
    },
  ],
  design: [
    {
      id: 17,
      title: 'Figma',
      description:
        'Think of it as a digital sketchbook for designing how your webpage will look and work.',
      image: figma,
    },
    {
      id: 18,
      title: 'Photoshop',
      description:
        'Its like a magic wand for images and graphics, helping to create eye-catching visuals for your webpage.',
      image: photoshop,
    },
  ],
};

export const socials = [
  {
    id: 0,
    title: 'github',
    link: 'https://github.com/Eugeneist',
    image: github_social,
    description: 'github link',
  },
  {
    id: 1,
    title: 'instagram',
    link: 'https://www.instagram.com/eugene_lufever/',
    image: instagram_social,
    description: 'instagram link',
  },
  {
    id: 2,
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/yevhen-rudofylov-ba8010166/',
    image: linkedin_social,
    description: 'linkedin link',
  },
  {
    id: 3,
    title: 'telegram',
    link: 'tg://resolve?domain=rudofylov',
    image: telegram_social,
    description: 'telegram link',
  },
];
