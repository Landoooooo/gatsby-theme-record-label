import React from "react";
import { ArtistComponent, ArtistImage } from "../styles/styledComponents";
import pandamonium from "../assets/images/pandamonium.jpg";

const Artist = props => {
    const { name, photo, location } = props.data
    return <ArtistComponent>
        <ArtistImage src={photo ? photo : pandamonium} />
        <span style={{ color: "red" }}>{name}</span><span style={{ color: "gold" }}>{location}</span>
    </ArtistComponent>
}

export default Artist;