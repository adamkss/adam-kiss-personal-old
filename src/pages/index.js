import React, { useCallback, useState } from "react"

import SEO from "../components/seo"
import styles from './index.module.css';
import { Classnames } from '../utils/ClassNameUtils';
import { navigate } from "gatsby";
import Header from "../components/header/header";

const IndexPage = () => {
  const [needTilesToExit, setNeedTilesToExit] = useState(false);

  const timeoutNavigateToPage = useCallback((page, timeout) => {
    setNeedTilesToExit(true);
    setTimeout(() => {
      navigate(page);
    }, timeout);
  }, []);

  const onPortfolioTileClick = useCallback(() => {
    timeoutNavigateToPage('/portfolio', 700);
  }, [timeoutNavigateToPage]);

  const extraTileCSS = needTilesToExit ? styles.exitTile : null;

  return (
    <>
      <SEO title="Home" />
      <Header/>
      <main className={styles.mainWrapper}>
        <section className={Classnames(styles.blogTile, styles.tile, extraTileCSS)}>
          <div className={Classnames(styles.blogBackground, styles.tileBackground)} />
          <span className={Classnames(styles.tileTitle, styles.blogTitle)}>Blog</span>
        </section>
        <section className={Classnames(styles.portfolioTile, styles.tile, extraTileCSS)} onClick={onPortfolioTileClick}>
          <div className={Classnames(styles.portfolioBackground, styles.tileBackground)} />
          <span className={Classnames(styles.tileTitle, styles.portfolioTitle)}>Portfolio/Work</span>
        </section>
        <section className={Classnames(styles.aboutTile, styles.tile, extraTileCSS)}>
          <div className={Classnames(styles.aboutBackground, styles.tileBackground)} />
          <span className={Classnames(styles.tileTitle, styles.aboutTitle)}>About me</span>
        </section>
      </main>
    </>
  )
}

export default IndexPage
