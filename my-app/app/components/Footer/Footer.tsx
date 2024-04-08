/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
          <footer className={styles.footer}>
        <div className={styles.iconContainer}>
          <img className={styles.icon} src="/footer-icon.svg" alt="" />
        </div>
        <div className={styles.linksContainer}>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/ergi-lama-75488a252/"
          >
            Facebook
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/ergi-lama-75488a252/"
          >
            LinkedIn
          </a>
          <a
            className={styles.links}
            href="https://www.linkedin.com/in/ergi-lama-75488a252/"
          >
            Twitter
          </a>
        </div>
        <div className={styles.iconContainer}>
          <img
            className={styles.socialMediaIcons}
            src="/facebook.svg"
            alt="facebook"
          />
          <img
            className={styles.socialMediaIcons}
            src="/linkedin.svg"
            alt="linkedin"
          />
          <img
            className={styles.socialMediaIcons}
            src="/twitter.svg"
            alt="twitter"
          />
        </div>
      </footer>
  )
}

export default Footer
