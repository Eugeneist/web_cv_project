import { SkillList } from '@/components';
import {
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
} from '@/assets/images';
import styles from './page.module.scss';

const skills = {
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

const SkillsPage = () => {
  return (
    <section className={styles.skills}>
      <SkillList skillsByGroup={skills} />
    </section>
  );
};

export default SkillsPage;
