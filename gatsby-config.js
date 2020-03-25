module.exports = {
  siteMetadata: {
    title: `WB 2020 Static`,
    description: `Wieser Brothers General Contracting | Design/Build, Project management, General Construction.`,
    author: `@gatsbyjs`,
    menuLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Our Firm",
        link: "/our-firm",
      },
      {
        name: "Our Services",
        link: "/our-services",
      },
      {
        name: "Our Commitment",
        link: "/our-commitment",
      },
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "News & Events",
        link: "/news-events",
      },
      {
        name: "Employee Login",
        link: "/employee-login",
      },
      {
        name: "Plan Room",
        link: "/plan-room",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`700`, `900`],
          },
          {
            family: `Open Sans`,
            variants: [`400`, `700`],
          },
          {
            family: `IBM Plex Serif`,
            variants: [`400`, "700"],
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
