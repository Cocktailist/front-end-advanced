import styled from "styled-components";

export const Wrapper = styled.div`
  width: inherit;
  height: 3.5em;
  position: fixed;
  bottom: 0;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  border-top: 3px solid var(--bg-color);
  box-sizing: border-box;
`;

export const Img = styled.img`
  height: 1.5em;
`;
