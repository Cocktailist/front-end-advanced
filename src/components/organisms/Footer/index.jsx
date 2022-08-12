import * as S from "./style";
import { Text } from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";

import nav_i01 from "../../../assets/img/nav_i01.png";
import nav_i02 from "../../../assets/img/nav_i02.png";
import nav_i03 from "../../../assets/img/nav_i03.png";
import nav_i04 from "../../../assets/img/nav_i04.png";

function Footer() {
  return (
    <S.Wrapper>
      <NavLink to="/main">
        <S.Img src={nav_i01} alt="icon"></S.Img>
      </NavLink>
      <NavLink to="/community">
        <S.Img src={nav_i02} alt="icon"></S.Img>
      </NavLink>
      <NavLink to="/cocktionary">
        <S.Img src={nav_i03} alt="icon"></S.Img>
      </NavLink>
      <NavLink to="/mypage">
        <S.Img src={nav_i04} alt="icon"></S.Img>
      </NavLink>
    </S.Wrapper>
  );
}

export default Footer;
