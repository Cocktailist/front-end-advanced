import { Space } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import ContentCol from "../../molecules/ContentCol";
import * as S from "./style";

// import d_06 from "/public/img/d_06.jpg"; // 모히또

const CocktailImgWithText = ({ img, to, upper, lower }) => {
  const navigate = useNavigate();
  return (
    <S.Wrapper
      onClick={() => navigate(`/cocktailbar/123/order/cocktail/${to}`)}
    >
      <img
        src={img}
        alt=""
        style={{
          width: "5rem",
          aspectRatio: "1 / 1",
          border: "1px solid var(--bg-color-d)",
          borderRadius: "50%",
          objectFit: "contain",
        }}
      />
      <Space w="md"></Space>
      <ContentCol
        upper={upper}
        lower={lower.map((e, idx) => e + " ")}
      ></ContentCol>
    </S.Wrapper>
  );
};

export default CocktailImgWithText;
