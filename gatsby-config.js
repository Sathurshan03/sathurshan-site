/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/sathurshan-site",
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-transformer-remark',
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: 0,
      duration:  1000
    }
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `thumbnail`,
      path: `${__dirname}/src/images/thumbnail`,
    },
  },
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projectImages`,
      path: `${__dirname}/src/images/projectImages`,
    },
  },
],
}
