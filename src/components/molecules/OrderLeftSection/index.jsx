import { Text, Space } from "@mantine/core";
import * as S from "./style";

const OrderLeftSection = ({ time, client }) => {
  return (
    <S.Wrapper>
      <Text size="lg" weight="bold">
        {"22:02"}
      </Text>
      <Space></Space>
      <Text>{client + "테이블"}</Text>
    </S.Wrapper>
  );
};

export default OrderLeftSection;
