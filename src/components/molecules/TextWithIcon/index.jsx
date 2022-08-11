import { Text } from "@mantine/core";
import * as S from "./style";

const TextWithIcon = ({ icon, right }) => {
  return (
    <S.Wrapper>
      <img src={icon} alt="" style={{ width: "1em", marginRight: "0.5em" }} />
      <Text size="sm">{right}</Text>
    </S.Wrapper>
  );
};

export default TextWithIcon;
