import styled from "styled-components";
import { FlexColCenter, FlexRowCenter } from "../../../commonStyles";

export const Wrapper = styled.div`
  ${FlexColCenter};
  width: 100%;
`;

export const RowWrapper = styled.div`
  ${FlexRowCenter}
  padding: 0 1.8em;
  box-sizing: border-box;
  position: absolute;
  bottom: 2em;
  width: 100%;
`;
