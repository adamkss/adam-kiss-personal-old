import React from "react"

import SEO from "../components/seo"
import styles from './index.module.css';
import { Classnames } from '../utils/ClassNameUtils';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <main className={styles.mainWrapper}>
      <section className={Classnames(styles.blogTile, styles.tile)}>
        <div className={Classnames(styles.blogBackground, styles.tileBackground)} />
        <span className={Classnames(styles.tileTitle, styles.blogTitle)}>Blog</span>
      </section>
      <section className={Classnames(styles.portfolioTile, styles.tile)}>
        <div className={Classnames(styles.portfolioBackground, styles.tileBackground)} />
        <span className={Classnames(styles.tileTitle, styles.portfolioTitle)}>Portfolio/Work</span>
      </section>
      <section className={Classnames(styles.aboutTile, styles.tile)}>
        <div className={Classnames(styles.aboutBackground, styles.tileBackground)} />
        <span className={Classnames(styles.tileTitle, styles.aboutTitle)}>About me</span>
      </section>
    </main>
  </>
)

export default IndexPage
