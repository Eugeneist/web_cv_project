import { Timeline } from '@/components';
import { hillel, khpi, donnuet } from '@/assets/images';

const education = [
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

const EducationPage = () => {
  return (
    <section>
      <h1>Education Page</h1>
      <Timeline data={education} />
    </section>
  );
};

export default EducationPage;
