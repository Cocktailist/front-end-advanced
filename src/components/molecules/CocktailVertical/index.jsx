import { Text, Space } from "@mantine/core";
import * as S from "./style";

const CocktailVertical = ({ img, name, onClick }) => {
  return (
    <S.Wrapper onClick={onClick}>
      <img
        src={img}
        alt=""
        style={{ width: "5em", height: "10em", objectFit: "contain" }}
      />
      <Space h="xs"></Space>
      <Text size="sm">{name}</Text>
    </S.Wrapper>
  );
};

export default CocktailVertical;
