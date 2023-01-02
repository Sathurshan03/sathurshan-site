/*https://www.youtube.com/watch?v=L32Vx_bEZhA&list=PL4cUxeGkcC9hw1g77I35ZivVLe8k2nvjB&index=19*/
const path = require('path')

exports.createPages = async ({graphql, actions}) => {

    const { data } = await graphql(`
    query Projects {
        allMarkdownRemark {
          nodes {
            frontmatter {
              slug
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: '/projects/' + node.frontmatter.slug,
            component: path.resolve('./src/templates/projectDetails.js'),
            context: { slug: node.frontmatter.slug }
        })
    })
}