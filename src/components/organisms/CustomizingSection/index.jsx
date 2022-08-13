import CustomMenuRow from "../../molecules/CustomMenuRow";
import * as S from "./style";

const CustomizingSection = () => {
  return (
    <S.Wrapper>
      <CustomMenuRow left={"샷 추가"}></CustomMenuRow>
      <CustomMenuRow left={"라임 주스"}></CustomMenuRow>
    </S.Wrapper>
  );
};

export default CustomizingSection;
