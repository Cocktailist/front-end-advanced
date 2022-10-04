import * as S from "./style";
import { NavLink } from "react-router-dom";

// import nav_i01 from "../../../assets/img/nav_i01.png";
// import nav_i02 from "../../../assets/img/nav_i02.png";
// import nav_i03 from "../../../assets/img/nav_i03.png";
// import nav_i04 from "../../../assets/img/nav_i04.png";

function Footer() {
  return (
    <S.Wrapper>
      <NavLink to="/">
        <S.Img src={"/images/nav_i01.png"} alt="icon"></S.Img>
      </NavLink>
      <NavLink to="/community">
        <S.Img src={"/images/nav_i02.png"} alt="icon"></S.Img>
      </NavLink>
      <NavLink to="/cocktionary">
        <S.Img src={"/images/nav_i03.png"} alt="icon"></S.Img>
      </NavLink>
      <NavLink to="/checkorder">
        <S.Img src={"/images/nav_i04.png"} alt="icon"></S.Img>
      </NavLink>
    </S.Wrapper>
  );
}

export default Footer;
