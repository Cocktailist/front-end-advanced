import { Text } from "@mantine/core";
import * as S from "./style";

import Counter from "../Counter";

const CustomMenuRow = ({ left }) => {
  return (
    <S.Wrapper>
      <Text>{left}</Text>
      <Counter></Counter>
    </S.Wrapper>
  );
};

export default CustomMenuRow;
