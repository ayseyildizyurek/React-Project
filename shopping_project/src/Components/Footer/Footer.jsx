import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-content"]}>
        <div className={styles["footer-links"]}>
          <ul>
            <li>
              <a href="/">Anasayfa</a>
            </li>
            <li>
              <a href="/products">Ürünler</a>
            </li>
            <li>
              <a href="/about">Hakkımızda</a>
            </li>
          </ul>
        </div>
        <div className={styles.contactInfo}>
          <h3>İletişim Bilgileri</h3>
          <p>Adres: ... Mah. ... Sok. No: 123, ... İl</p>
          <p>Email: info@site.com</p>
          <p>Telefon: 123-456-789</p>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p>
          &copy; {new Date().getFullYear()} Örnek Şirket. Tüm Hakları Saklıdır.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
