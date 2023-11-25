import { dizhka, cv_website, fresh_news } from '@/assets/images';
import styles from './page.module.scss';
import { ProjectsList } from '@/components';

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
];

const ProjectsPage = () => {
  return (
    <section className={styles.projects}>
      <ProjectsList projects={projects} isFull={true} />
    </section>
  );
};

export default ProjectsPage;
