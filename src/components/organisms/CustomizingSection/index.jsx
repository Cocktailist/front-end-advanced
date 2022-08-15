import { useEffect } from "react";
import { useState } from "react";
import CustomMenuRow from "../../molecules/CustomMenuRow";
import * as S from "./style";

const customizeOptions = [
  { name: "샷 추가", type: "counter" },
  { name: "라임 주스", type: "selector" },
  { name: "라임", type: "counter" },
  { name: "설탕 추가", type: "counter" },
  { name: "민트잎", type: "counter" },
  { name: "얼음", type: "selector" },
];

const CustomizingSection = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const sendFormData = (data) => {
    //  formData를 백엔드로 전송!
  };

  return (
    <S.Wrapper>
      <form action={sendFormData}>
        {customizeOptions.map((option) => (
          <CustomMenuRow
            onChange={setFormData}
            left={option.name}
            type={option.type}
          ></CustomMenuRow>
        ))}
        <button>전송</button>
      </form>
    </S.Wrapper>
  );
};

export default CustomizingSection;
