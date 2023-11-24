import { SkillList } from '@/components';
import styles from './page.module.scss';
import img from '../../../../assets/github.svg';
import html from '../../../../assets/html.svg';

const skills = {
  development: [
    {
      id: 0,
      title: 'HTML',
      description: 'markup language',
      image: `${html.src}`,
    },
    { id: 1, title: 'CSS', description: 'stylesheets', image: `${img.src}` },
    {
      id: 2,
      title: 'SCSS/SASS',
      description: 'stylesheets',
      image: `${img.src}`,
    },
    {
      id: 3,
      title: 'JavaScript',
      description: 'programming language',
      image: `${img.src}`,
    },
    {
      id: 4,
      title: 'TypeScript',
      description: 'programming language',
      image: `${img.src}`,
    },
    { id: 5, title: 'Next.js', description: 'framework', image: `${img.src}` },
    {
      id: 6,
      title: 'Node.js',
      description: 'cross-platform JavaScript runtime environment',
      image: `${img.src}`,
    },
  ],
  libraries: [
    {
      id: 7,
      title: 'React',
      description: 'JavaScript library',
      image: `${img.src}`,
    },
    {
      id: 8,
      title: 'Redux',
      description: 'state management library',
      image: `${img.src}`,
    },
    {
      id: 9,
      title: 'Material UI',
      description: 'user interface library',
      image: `${img.src}`,
    },
    {
      id: 10,
      title: 'Chakra UI',
      description: 'user interface library',
      image: `${img.src}`,
    },
    {
      id: 11,
      title: 'Styled Components',
      description: 'styling CSS in JS',
      image: `${img.src}`,
    },
    {
      id: 12,
      title: 'React Hook Form',
      description: 'react form library',
      image: `${img.src}`,
    },
    { id: 13, title: 'JQuerry', description: 'old library', image: `${img}` },
  ],
  tools: [
    {
      id: 14,
      title: 'GIT',
      description: 'version control system',
      image: `${img.src}`,
    },
    {
      id: 15,
      title: 'Webpack',
      description: 'package manager',
      image: `${img.src}`,
    },
  ],
  design: [
    {
      id: 16,
      title: 'Figma',
      description: 'design tool for building meaningful products',
      image: `${img.src}`,
    },
    {
      id: 17,
      title: 'Photoshop',
      description: 'graphic tool',
      image: `${img.src}`,
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
