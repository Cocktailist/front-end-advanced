import { Text } from "@mantine/core";
import * as S from "./style";

const TitleRow = ({ left, right }) => {
  return (
    <S.Wrapper>
      <Text size="lg" weight="bold" color="var(--primary-color)">
        {left}
      </Text>
      <Text color="var(--primary-color)">{right}</Text>
    </S.Wrapper>
  );
};

export default TitleRow;
