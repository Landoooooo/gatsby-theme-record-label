import React from "react"
import Layout from "../layout"
import Artist from "../components/artist"
import { graphql } from "gatsby"
import { ComponentLink, IndexContainer } from "../styles/styledComponents"

export const query = graphql`
  query {
    pandamonium {
      artists {
        name
        photo
        albums {
          name
          photo
        }
      }
    }
  }
`

export default function Home({ data }) {
  const { pandamonium } = data
  return (
    <Layout>
      <IndexContainer>
        {pandamonium.artists.map(artist => (
          <ComponentLink to={`/artist/${artist.name}`}>
            <Artist data={artist} />
          </ComponentLink>
        ))}
      </IndexContainer>
    </Layout>
  )
}
