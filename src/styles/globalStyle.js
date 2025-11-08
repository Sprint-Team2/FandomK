import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* black */
    --black-02000E: #02000E;
    --black-181D26: #181D26;
    /* yellow */
    --yellow-Dec030: #Dec030;
    /* brand */
    --orange-F96D69: #F96D69;
    --pink-FE5493: #FE5493;
    /* gray */
    --gray-67666E: #67666E;
    --gray-828282: #828282;
    --gray-8C92AB: #8C92AB;
    --gray-A3A5A8: #A3A5A8;
    /* white */
    --white-FFFFFF: #FFFFFF;
    --white-F7F7F8: #F7F7F8;
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 900;
    font-display: swap;
    src: local("Pretendard Black"),
      url("/fonts/pretendard/Pretendard-Black.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Black.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 800;
    font-display: swap;
    src: local("Pretendard ExtraBold"),
      url("/fonts/pretendard/Pretendard-ExtraBold.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-ExtraBold.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"),
      url("/fonts/pretendard/Pretendard-Bold.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Bold.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"),
      url("/fonts/pretendard/Pretendard-SemiBold.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-SemiBold.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 500;
    font-display: swap;
    src: local("Pretendard Medium"),
      url("/fonts/pretendard/Pretendard-Medium.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Medium.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"),
      url("/fonts/pretendard/Pretendard-Regular.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Regular.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 300;
    font-display: swap;
    src: local("Pretendard Light"),
      url("/fonts/pretendard/Pretendard-Light.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Light.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 200;
    font-display: swap;
    src: local("Pretendard ExtraLight"),
      url("/fonts/pretendard/Pretendard-ExtraLight.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-ExtraLight.woff") format("woff");
  }

  @font-face {
    font-family: "Pretendard";
    font-weight: 100;
    font-display: swap;
    src: local("Pretendard Thin"),
      url("/fonts/pretendard/Pretendard-Thin.woff2") format("woff2"),
      url("/fonts/pretendard/Pretendard-Thin.woff") format("woff");
  }

  * {
    margin: 0;
    font-family: "Pretendard", sans-serif !important;
    box-sizing: border-box;
  }

  html {
    background: var(--black-02000E);
    color: var(--white-F7F7F8);
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 2.6rem;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul,
  ol {
    list-style: none;
  }

  img,
  svg {
    display: block;
    max-width: 100%;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    color: var(--white-F7F7F8);
    border: none;
    background: none;
    outline: none;
  }
`;
