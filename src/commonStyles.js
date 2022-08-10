import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

// 기본 여백 삭제
export const GlobalStyles = createGlobalStyle`
  ${reset}
  :root {
    /* --primary-color: #2566B8; */
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
  width: 100%;
  height: 6em;
`;

export const Contents = styled.div`
  background-color: blue;
  flex: 1;
  width: 100%;
  height: auto;
`;

export const Footer = styled.div`
  background-color: red;
  width: 100%;
  height: 3.5em;
  position: fixed;
  bottom: 0;
`;
