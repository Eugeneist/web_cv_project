import styles from "./Footer.module.scss";
import { Socials } from "@/components";
import { socials } from "@/data/data";

const Footer: React.FC = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <section className={styles.footer__inner}>
        <Socials socials={socials} width={20} height={20} gap={10} />
        <div className={styles.footer__copyright}>
          <p>Designed & developed by Yevhen Rudofylov</p>
          <p>{`2023 - ${currentYear}`}</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
