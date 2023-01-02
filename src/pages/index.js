import * as React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import Experience from "../components/Experience"
import Skills from "../components/Skills"
import "../styles/mainPage.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"


export default function Home({data}) {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
        <section id="home"><About /></section>    
        <section id="experience"><Experience /></section>
        <section id="skills"><Skills /></section>
        <section id="projectBoard" className="projectBoard">
          <div className="hiddenDown">
            <h3>Project Board</h3>
            <h4>click the panels to learn more</h4>
          </div>
          <div className="projectGrid">
            {projects.map(project =>(
              <div className="hiddenDown">
                <Link to= {"/projects/" + project.frontmatter.slug}  key={project.id} style={{ textDecoration: 'none' }}>
                    <div className="projectPanels">
                      <Img fluid={project.frontmatter.thumbnail.childImageSharp.fluid} alt= {project.frontmatter.slug}  className="thumbnail"/>
                    
                      <h1>{project.frontmatter.title}</h1>
                      <h2>{project.frontmatter.formatDate}</h2>
                    </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
    </Layout>
  )
}

/*https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos.*/
if (typeof window !== `undefined`) {
  /*animation from left to right*/ 
  function revealLeft() {
    var reveals = document.querySelectorAll(".hiddenLeft");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        reveals[i].classList.add("showLeft");
      } else {
        reveals[i].classList.remove("showLeft");
      }
    }
  }

  window.addEventListener("scroll", revealLeft);

  revealLeft();

  /*animation from right to left*/ 
  function revealRight() {
    var reveals = document.querySelectorAll(".hiddenRight");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight) {
        reveals[i].classList.add("showRight");
      } else {
        reveals[i].classList.remove("showRight");
      }
    }
  }

  window.addEventListener("scroll", revealRight);

  revealRight();

  /*animation from down to top*/ 
  function revealDown() {
    var reveals = document.querySelectorAll(".hiddenDown");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight + windowHeight/3*2) {
        reveals[i].classList.add("showDown");
      } else {
        reveals[i].classList.remove("showDown");
      }
    }
  }

  window.addEventListener("scroll", revealDown);

  revealDown();
}

/*Export page query*/
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        title
        slug
        formatDate
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
      id
    }
  }
}`