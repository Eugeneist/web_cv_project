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
      description: 'markup language',
      image: html,
    },
    { id: 1, title: 'CSS', description: 'stylesheets', image: css },
    {
      id: 2,
      title: 'SCSS/SASS',
      description: 'stylesheets',
      image: sass,
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'programming language',
      image: javascript,
    },
    {
      id: 4,
      title: 'TypeScript',
      description: 'programming language',
      image: typescript,
    },
    { id: 5, title: 'Next.js', description: 'framework', image: `${next.src}` },
    {
      id: 6,
      title: 'Node.js',
      description: 'cross-platform JavaScript runtime environment',
      image: node,
    },
  ],
  libraries: [
    {
      id: 7,
      title: 'React',
      description: 'JavaScript library',
      image: react,
    },
    {
      id: 8,
      title: 'Redux',
      description: 'state management library',
      image: redux,
    },
    {
      id: 9,
      title: 'Material UI',
      description: 'user interface library',
      image: mui,
    },
    {
      id: 10,
      title: 'Chakra UI',
      description: 'user interface library',
      image: chakraui,
    },
    {
      id: 11,
      title: 'Styled Components',
      description: 'styling CSS in JS',
      image: styledcomponents,
    },
    {
      id: 12,
      title: 'React Hook Form',
      description: 'react form library',
      image: reacthookform,
    },
    {
      id: 13,
      title: 'JQuerry',
      description: 'old library',
      image: jquerry,
    },
  ],
  tools: [
    {
      id: 14,
      title: 'GIT',
      description: 'version control system',
      image: git,
    },
    {
      id: 15,
      title: 'Webpack',
      description: 'package manager',
      image: webpack,
    },
    {
      id: 16,
      title: 'NPM',
      description: ' node package manager',
      image: npm,
    },
  ],
  design: [
    {
      id: 17,
      title: 'Figma',
      description: 'design tool for building meaningful products',
      image: figma,
    },
    {
      id: 18,
      title: 'Photoshop',
      description: 'graphic tool',
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
