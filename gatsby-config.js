module.exports = {
  siteMetadata: {
    title: "ubermeows",
    author: "ubermeows",
    description: "L'alliance impromptue d'un dev back et front, parfois on code des trucs, parfois on mange des glaces."
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require(`autoprefixer`)
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "G-F823NYDPRN",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Ubermeows",
        short_name: "Ubermeows",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
