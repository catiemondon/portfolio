module.exports = {
  siteMetadata: {
    title: "Catie Mondon, Web Developer",
    author: "Catie Mondon",
    description: "A portfolio site for Catie Mondon"
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
        
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
