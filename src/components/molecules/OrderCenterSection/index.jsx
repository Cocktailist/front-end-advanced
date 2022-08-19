import { Text, Space } from "@mantine/core";
import * as S from "./style";

const OrderCenterSection = ({ bill, cocktails }) => {
  return (
    <S.Wrapper>
      <S.RowWrapper>
        <Text>{`[메뉴 ${cocktails ? cocktails.length : "0"}개]`}</Text>
        <Space w="md"></Space>
        <Text size="lg" weight="bold">
          {bill + "원"}
        </Text>
      </S.RowWrapper>
      <S.ColWrapper>
        {cocktails &&
          cocktails.map((cocktail) => (
            <Text color={"gray"} size="xs">
              {cocktail.cocktail}
            </Text>
          ))}
      </S.ColWrapper>
      <Text
        style={{
          position: "absolute",
          right: "1.5em",
          bottom: "0.5em",
          cursor: "pointer",
        }}
        size="xs"
      >
        주문상세보기
      </Text>
    </S.Wrapper>
  );
};

export default OrderCenterSection;
