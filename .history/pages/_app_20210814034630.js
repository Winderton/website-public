import "../styles/globals.css";

import Nav from "../components/Nav";
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
import Footer from "../components/Footer";


config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Nav></Nav>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
