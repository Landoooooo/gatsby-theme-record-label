import React from "react"
import Layout from "../layout"
import { ArtistImage, ArtistContainer, ComponentLink } from '../styles/styledComponents';
import pandamonium from '../assets/images/pandamonium.jpg';

const Album = ({ pathContext: { name, artistName, photo, songs } }) => {
    return <Layout>
        <ArtistContainer>
            <ArtistImage src={photo || pandamonium} />
            <h2 style={{ color: 'red' }}>{name} songs</h2>
            <div>
                <ol>{songs && songs.map(song => <ComponentLink to={"https://andres.bandcamp.com/track/back-in-the-old-times"} target="_blank"><li style={{ color: 'gold' }}>{song.name}</li>
                </ComponentLink>)}</ol>
            </div>
        </ArtistContainer>
    </Layout>
}

export default Album;