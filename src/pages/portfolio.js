import React from "react"
import SEO from "../components/seo"
import Header from "../components/header/header";
import styles from './portfolio.module.css';
import { Classnames } from '../utils/ClassNameUtils';

const Portfolio = () => (
  <>
    <SEO title="Portfolio" />
    <Header switchToBlackTextDelayed />
    <main className={Classnames(styles.main)}>

    </main>
  </>
)

export default Portfolio
