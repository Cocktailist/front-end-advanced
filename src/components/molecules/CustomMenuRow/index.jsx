import { Text } from "@mantine/core";
import * as S from "./style";

import Counter from "../Counter";
import Selector from "../Selector";

const CustomMenuRow = ({ onChange, left, type }) => {
  return (
    <S.Wrapper>
      <Text size="xl">{left}</Text>
      {type === "counter" ? (
        <Counter optionName={left} onChange={onChange} />
      ) : (
        <Selector />
      )}
    </S.Wrapper>
  );
};

export default CustomMenuRow;
