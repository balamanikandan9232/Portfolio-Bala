import styles from './footerstyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025 Bala Manikandan. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;