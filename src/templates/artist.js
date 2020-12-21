import React from 'react';
import Layout from '../layout';
import { ArtistImage, ArtistContainer, ComponentLink, AlbumContainer } from '../styles/styledComponents';
import Album from '../components/album';
import pandamonium from '../assets/images/pandamonium.jpg';

const Artist = ({
    pathContext: {
        location, name, photo, albums,
    },
}) => (
        <Layout>
            <ArtistContainer>
                <ArtistImage src={photo || pandamonium} />
                <h2 style={{ color: 'red' }}>Albums</h2>
                <AlbumContainer>
                    {albums && albums.map((album) => <ComponentLink to={`/artist/${name}/${album.name}`}><Album data={album} /></ComponentLink>)}
                </AlbumContainer>
            </ArtistContainer>
        </Layout>
    );

export default Artist;
