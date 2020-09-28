import React from "react";
import Layout from "../layout";
import { ComponentLink } from "../styles/styledComponents";
import { artists } from "../helpers/data";
import Album from "../components/album";

const Music = props => {
    return <Layout>
        <div style={{ display: "flex", flexWrap: "wrap", margin: "5em 10em 0 10em" }}>
            {artists.map(artist =>
                artist.albums.map(album => <ComponentLink to={`/artist/${artist.name}/${album.name}`}><Album music data={{ artistName: artist.name, ...album }} /></ComponentLink>))}
    )
        </div>
    </Layout>
}

export default Music;