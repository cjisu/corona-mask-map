import reset from "styled-reset";

import { createGlobalStyle } from "styled-components";
import { theme } from "~/styledComponent";

const GlobalStyles = createGlobalStyle`
${reset}
*, *:before, *:after {
  box-sizing: border-box;
  font-size: 16px;
}
html, body {
  font-family: ${theme.font.family};
}
body {
  font-size: ${theme.font.base};
  ::-webkit-scrollbar {
    display: none;
  }
}
body, input, textarea, select, button {
  font-synthesis: none;
  -moz-font-feature-settings: 'kern';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  direction: ltr;
  text-align: left;
  letter-spacing: normal;
}
img {
  vertical-align: bottom;
}
button, input {
  padding: 0;
  border: 0;
}
button,
input[type="text"],
input[type="tel"],
input[type="number"],
input[type="password"],
input[type="email"] {
  appearance: none;
}
button {
  background-color: transparent;
  cursor: pointer;
  outline: none;
}
a {
  text-decoration: none;
}
#root, #modal,
header, main, footer, article, nav, section, div {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-shrink: 0;
}
#root {
  position: relative;
}

.body-no-scroll {
  overflow: hidden;
}

.hilight {
}

.fade-enter {
  opacity: 0.01;
}
.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}
.fade-exit {
  opacity: 1;
}
.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
`;

export default GlobalStyles;
