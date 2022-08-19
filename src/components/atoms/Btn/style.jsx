import styled, { css } from "styled-components";

const buttonStyles = ({ status }) => {
  if (status === "inOrder") {
    return css`
      background-color: white;
      border: 1px solid var(--primary-color);
      color: var(--primary-color);
    `;
  } else if (status === "inServe") {
    return css`
      opacity: 0.7;
      background-color: var(--primary-color);
      border: 1px solid var(--primary-color);
      color: white;
    `;
  } else if (status === "doneOrder") {
    return css`
      background-color: var(--primary-color);
      border: 1px solid var(--primary-color);
      color: white;
    `;
  }
};

export const Btn = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 9px;
  cursor: pointer;
  ${buttonStyles};
`;
