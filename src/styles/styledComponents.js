import styled from "styled-components";
import { Link } from "gatsby";

export const MenuLink = styled(Link)`
    text-decoration: none;
    color: gold;
    font-weight: 900;

    &:hover {
        color: #f81800;
    }
`;

export const ComponentLink = styled(Link)`
    text-decoration: none;
    color:inherit;
`

export const ExternalLink = styled.a`
    text-decoration: none;
    color:inherit;
`

export const HeaderContainer = styled.div`
    display:flex;
    margin-top: 2em;
    justify-content:center;
    flex-direction: column;
    align-items: center;
`;

export const LayoutContainer = styled.div`
    display:flex;
    flex-direction: column;
    background: black;
    width: 100%;
    height: 100vh;
`;

export const ArtistComponent = styled.div`
    display: flex;
    flex-direction:column;
    border: 1px solid gold;
    margin-right:2em;
    margin-bottom:2em;
    width: 20em;
    height: 23em;
    padding: 1em;

    @media(max-width: 768px){
        margin-right:0;
    }
`;

export const ArtistContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin: 5em 20em 0 20em;

    @media(max-width: 768px){
        margin:0;
    }
`

export const ArtistImage = styled.img`
    width: 325px;
    height: 325px;
    margin-bottom: 0.5em;

    @media(max-width: 768px){
        margin-top:1em;
    }
`

export const HeaderTitle = styled.h1`
    font-family: Cursive;
    color: #f81800;
    font-size: 3em;

    @media(max-width: 768px){
        font-size:2em;
    }
`;

export const IndexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 5em 10em 0 10em;

    @media(max-width: 768px){
        justify-content: center;
        margin: 0;
        margin-top: 1em;
    }
`;

export const AlbumContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 768px){
        justify-content: center;
    }
`