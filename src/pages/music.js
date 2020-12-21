import React from "react"
import Layout from "../layout"
import { ComponentLink } from "../styles/styledComponents"
import { artists } from "../helpers/data"
import Album from "../components/album"

export const query = graphql`
  query {
    pandamonium {
      artists {
        name
        albums {
          name
          photo
        }
      }
    }
  }
`

const Music = ({ data }) => {
  const { pandamonium } = data
  return (
    <Layout>
      <div
        style={{ display: "flex", flexWrap: "wrap", margin: "5em 10em 0 10em" }}
      >
        {pandamonium.artists.map(artist =>
          artist.albums.map(album => (
            <ComponentLink to={`/artist/${artist.name}/${album.name}`}>
              <Album music data={{ artistName: artist.name, ...album }} />
            </ComponentLink>
          ))
        )}
        )
      </div>
    </Layout>
  )
}

export default Music
