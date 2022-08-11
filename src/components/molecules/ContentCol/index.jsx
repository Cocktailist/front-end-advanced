import { Text, Space } from "@mantine/core";
import * as S from "./style";

const ContentCol = ({ upper, lower }) => {
  return (
    <S.Wrapper>
      <Text size="lg" weight="bold">
        {upper}
      </Text>
      <Space></Space>
      <Text>{lower}</Text>
    </S.Wrapper>
  );
};

export default ContentCol;
