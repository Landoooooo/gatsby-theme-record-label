import React from "react"
import Layout from "../layout"
import { artists } from "../helpers/data"
import Artist from "../components/artist";
import { ComponentLink } from "../styles/styledComponents"
export default function Home() {
  return <Layout>
    <div style={{ margin: "5em 10em 0 10em", display: "flex", flexWrap: "wrap", width: "100%" }}>
      {artists.map(artist => <ComponentLink to={`/artist/${artist.name}`}><Artist data={artist} /></ComponentLink>)}
    </div>
  </Layout>
}
