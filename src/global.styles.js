import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    padding: 20px 60px;
    overflow: scroll;

    @media screen and (max-width: 800px) {
			padding: 10px;
		}
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyles;
