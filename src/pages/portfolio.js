import React from "react"
import SEO from "../components/seo"
import Header from "../components/header/header";
import styles from './portfolio.module.css';
import { Classnames } from '../utils/ClassNameUtils';
import { graphql } from 'gatsby';

const Portfolio = ({ data }) => {
  const posts = data.allMdx.edges;

  return (
    <>
      <SEO title="Portfolio" />
      <Header switchToBlackTextDelayed />
      <main className={Classnames(styles.main)}>

      </main>
    </>
  )
}
export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`