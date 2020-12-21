import React from "react";
import { HeaderContainer, MenuLink, HeaderTitle } from "../styles/styledComponents"
const Header = props => {
    return <div>
        <HeaderContainer>
            <HeaderTitle>Pandamonium Records</HeaderTitle>
            <div>
                <MenuLink to="/">Artists</MenuLink><span style={{ color: "gold", fontWeight: 900 }}> | </span><MenuLink to="/music">Music</MenuLink>
            </div>
        </HeaderContainer>
    </div>
}

export default Header;