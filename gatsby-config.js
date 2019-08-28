const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Web Portfolio',
    author: 'Tyler Edge',
    description: 'Template powered portfolio for Tyler Edge',
  },
  plugins: [

    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-offline',

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    'gatsby-plugin-sass',

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`
      }
    },

    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
