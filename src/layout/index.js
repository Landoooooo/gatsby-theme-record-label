import React from "react";
import Header from "../components/header"
import {LayoutContainer} from "../styles/styledComponents"
import "../styles/index.scss"

const Layout = (props) => {
return <LayoutContainer><Header/>{props.children}</LayoutContainer>
}

export default Layout;