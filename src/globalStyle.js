import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    box-sizing: border-box;
    font-family: 'lato', sans-serif;
  }

h1 {
    font-size: 4rem;  
}

h2 {
    font-size: 3.2rem;
}
h3{
    font-size: 2rem;
}
h4 {
    font-size: 2rem;
}
p {
  margin-bottom: 2rem;
  font-size: 1.4rem;
  color: #617d98;
}

  h1, h2, h3, h4 {
    letter-spacing: .16rem;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1.2rem;
    line-height: 1;
    color: #777;
  }
  
  a {
    text-decoration: none;
  }
  
  ul, li {
    list-style: none;
  }
`;