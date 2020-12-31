module.exports = {
  siteMetadata: {
    title: `Vanderson Arruda - Test Gatsby`,
    description: `Don’t skip design. Learn design and code, by building real apps, collaborate and solving product UI problems.`,
    author: `@vandersonarruda`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
