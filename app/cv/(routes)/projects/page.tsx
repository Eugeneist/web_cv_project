import styles from './page.module.scss';
import { ProjectsList } from '@/components';
import project_0 from '../../../../assets/project_0.png';
import project_1 from '../../../../assets/project_1.jpg';
import project_2 from '../../../../assets/project_2.png';

const projects = [
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
    picture: `${project_1.src}`,
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
    picture: `${project_0.src}`,
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
    picture: `${project_2.src}`,
  },
];

const ProjectsPage = () => {
  return (
    <section className={styles.projects}>
      <ProjectsList projects={projects} isFull={true} />
    </section>
  );
};

export default ProjectsPage;
