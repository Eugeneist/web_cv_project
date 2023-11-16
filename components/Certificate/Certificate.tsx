import styles from './Certificate.module.scss';

interface CertificateProps {
  title: string;
  description: string;
  link: string;
}

const Certificate: React.FC<CertificateProps> = ({
  title,
  description,
  link,
}) => {
  return (
    <article className={styles.cerificate}>
      <h4 className={styles.certificate__title}>{title}</h4>
      <p className={styles.certificate__description}>{description}</p>
      <a className={styles.certificate__link} href={link}>
        Certificate
      </a>
    </article>
  );
};

export default Certificate;
