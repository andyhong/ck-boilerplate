import React from 'react'
import { Link } from 'gatsby'
import "../components/style.css"
import SEO from '../components/seo'
import Footer from '../components/footer'

const PagesPage = ({ data }) => {

  return (
    <div className="wrapper">
      <SEO title={"Bulletins"} />
      <div style={divStyle}>
        <h1>bulletins</h1>
        <p>Here you find a list of all bulletins that have been published.</p>
        {data.allMarkdownRemark.nodes.filter(node => node.frontmatter.type === "bulletin").map(bulletin => (
          <Link key={bulletin.frontmatter.date} to={`/bulletin/${bulletin.frontmatter.date}`}><h3 style={{color: '#FAAE2B'}}>{bulletin.frontmatter.date}</h3></Link>
        ))}
      </div>
      <Footer />
    </div>
  )
}

const divStyle = {
  marginTop: '3em',
  maxWidth: '300px',
  display: 'block',
  textAlign: 'center',
}

export const AllBulletinsQuery = graphql`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {in: ["bulletin", "hub"]}}}, sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          type
          title
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`

export default PagesPage
