import styles from './InfoCV.module.scss';

const InfoCV = () => {
  return (
    <section className={styles.info}>
      <article>
        <h2>About</h2>
        <p>Frontend developer with 100 years experience</p>
      </article>
      <section className={styles.info__columns}>
        <section>
          <div>
            <h2>Professional skills</h2>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
            </ul>
          </div>
          <div>
            <h2>Languages</h2>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <article>
            <h2>Education</h2>
            <p>univescity and courses</p>
          </article>
        </section>
        <section>
          <h2>Projects</h2>
          <ol>
            <li>Dizhka Store</li>
            <li>CV website</li>
            <li>Fresh News</li>
            <li>Currency Converter</li>
          </ol>
        </section>
        <section>
          <div>
            <h2>Contact Information</h2>
            <ul>
              <li>tel</li>
              <li>email</li>
              <li>LinkedIn</li>
              <li>GitHub</li>
              <li>Telegram</li>
              <li>address</li>
            </ul>
          </div>
          <div>QR</div>
        </section>
      </section>
    </section>
  );
};

export default InfoCV;
