import styled from "styled-components";

export const Wrapper = styled.div`
  width: inherit;
  height: 6em;
  background-color: white;

  position: fixed;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-bottom: 3px solid var(--bg-color);
  margin-bottom: 0.5em 0;

  z-index: 10;
`;
