import CustomMenuRow from "../../molecules/CustomMenuRow";
import * as S from "./style";

const customizeOptions = [
  { name: "샷 추가", type: "counter" },
  { name: "라임 주스", type: "select" },
  { name: "라임", type: "counter" },
  { name: "설탕 추가", type: "counter" },
  { name: "민트잎", type: "counter" },
  { name: "얼음", type: "select" },
];

const CustomizingSection = () => {
  return (
    <S.Wrapper>
      {customizeOptions.map((option) => (
        <CustomMenuRow left={option.name} type={option.type}></CustomMenuRow>
      ))}
    </S.Wrapper>
  );
};

export default CustomizingSection;
