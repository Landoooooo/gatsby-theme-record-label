import React from "react";
import { HeaderContainer, MenuLink } from "../styles/styledComponents"
const Header = props => {
    return <div>
        <HeaderContainer>
            <h1 style={{ fontFamily: "Cursive", color: "#f81800", fontSize: "3em" }}>Pandamonium Records</h1>
            <div>
                <MenuLink to="/">Artists</MenuLink><span style={{ color: "gold", fontWeight: 900 }}> | </span><MenuLink to="/music">Music</MenuLink>
            </div>
        </HeaderContainer>
    </div>
}

export default Header;