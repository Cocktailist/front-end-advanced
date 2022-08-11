import { Text, Space } from "@mantine/core";
import * as S from "./style";

const ContentTitleRow = ({ image, nick_name, board, date }) => {
  return (
    <S.Wrapper>
      <S.SubWrapper>
        <Text size="lg" weight="bold">
          {nick_name}
        </Text>
        <Space w="md"></Space>
        <Text size="sm">{board}</Text>
      </S.SubWrapper>
      <Text size="sm">{date}</Text>
    </S.Wrapper>
  );
};

export default ContentTitleRow;
