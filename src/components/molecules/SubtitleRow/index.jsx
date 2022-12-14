import { Text, Space } from "@mantine/core";
import * as S from "./style";

const SubtitleRow = ({ left, right }) => {
  return (
    <S.Wrapper>
      <Text size="md" weight="bold" color="">
        {left}
      </Text>
      <Space w="md" />
      <Text color="#868686">{right}</Text>
    </S.Wrapper>
  );
};

export default SubtitleRow;
