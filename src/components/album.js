import React from "react";
import { ArtistComponent, ArtistImage } from "../styles/styledComponents";
import pandamonium from "../assets/images/pandamonium.jpg";

const Album = props => {
    const { name, photo, artistName } = props.data
    return <ArtistComponent>
        <ArtistImage src={photo ? photo : pandamonium} />
        <span style={{ color: "red" }}>{name}</span> {artistName && <span style={{ color: "gold" }}>{artistName}</span>}
    </ArtistComponent>
}

export default Album;