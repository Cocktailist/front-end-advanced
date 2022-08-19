import styled from "styled-components";
import { FlexCol, FlexRowBtwn } from "../../../commonStyles";

export const Wrapper = styled.div`
  ${FlexCol}
  width: 60%;
  height: 100%;
  position: relative;
`;

export const RowWrapper = styled.div`
  ${FlexRowBtwn}
  padding: 0 1em;
  box-sizing: border-box;
`;

export const ColWrapper = styled.div`
  ${FlexCol}
  padding: 0;
  padding: 0 1em;
  box-sizing: border-box;
`;
