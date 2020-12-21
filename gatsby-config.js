/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "PANDAMONIUM",
        fieldName: "pandamonium",
        url: `https://pandamoniumrecords.hasura.app/v1/graphql`,
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custome: { families: ["Cursive"], urls: ["/fonts/fonts.css"] },
      },
    },
  ],
}
