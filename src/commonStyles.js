import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

// 기본 여백 삭제
export const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=League+Gothic&family=Noto+Sans+KR&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&display=swap");
  @font-face {
  font-family: "GmarketSansLight";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  }
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff") format("woff");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Playfair Display", serif;
    src: url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
  }
  ${reset}
  :root {
    font-family: "GmarketSansMedium";
    --primary-color: rgb(131, 66, 213);
    /* --box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px; */
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0px auto;
  width: 390px;
  height: 100vh;
  min-height: 100vh;
  /* color: ${(props) => props.theme.fontColor}; */
  /* background-color: ${(props) => props.theme.bgColor}; */
  @media screen and (max-width: 844px) {
    width: 100%;
  }
`;

export const Header = styled.div`
  background-color: green;
  width: inherit;
  height: 6em;
  position: fixed;
  top: 0;
`;

export const Contents = styled.div`
  width: inherit;
  height: auto;
  padding: 1.5em;
  padding-bottom: 3.5em;
  margin-top: 6em;
  box-sizing: border-box;
  /* z-index: 0; */
`;

export const Footer = styled.div`
  background-color: red;
  width: inherit;
  height: 3.5em;
  position: fixed;
  bottom: 0;
`;

export const FlexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
`;

export const FlexRowBtwn = css`
  ${FlexRow};
  justify-content: space-between;
`;

export const FlexRowArnd = css`
  ${FlexRow};
  justify-content: space-around;
`;

export const FlexRowCenter = css`
  ${FlexRow};
  justify-content: center;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  width: 100%;
`;

export const FlexColCenter = css`
  ${FlexCol};
  align-items: center;
`;
