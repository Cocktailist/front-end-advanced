import { Text, Space } from "@mantine/core";
import * as S from "./style";

const CocktailVertical = ({ img, name }) => {
  return (
    <S.Wrapper>
      <img src={img} alt="" style={{ width: "5em", height: "10em" }} />
      <Space h="xs"></Space>
      <Text size="sm">{name}</Text>
    </S.Wrapper>
  );
};

export default CocktailVertical;
