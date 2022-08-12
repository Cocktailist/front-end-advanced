import * as S from "./style";
import { Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import IconBack from "../../../assets/img/backIcon.png";

function Header() {
  const navigate = useNavigate();
  return (
    <S.Wrapper>
      <img
        style={{ width: "0.5em", cursor: "pointer" }}
        onClick={() => navigate(-1)}
        alt="img"
        src={IconBack}
      />
      <Text color="var(--primary-color)" size="lg">
        CocktailBar
      </Text>
      <div></div>
    </S.Wrapper>
  );
}

export default Header;
