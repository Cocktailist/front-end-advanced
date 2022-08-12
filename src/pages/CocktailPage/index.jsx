import { useEffect } from "react";
import { Text, Space } from "@mantine/core";
import FullImg from "../../components/molecules/FullImg";
import ContentCol from "../../components/molecules/ContentCol";
import Divider from "../../components/molecules/Divider";
import FullButton from "../../components/molecules/FullButton";

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
  cocktail_info: {
    cocktail_id: "1",
    cocktail_order_img: "", // 주문전용 칵테일 디비
    cocktail_korname: "모히또",
    cocktail_engname: "Mojito",
    cocktail_alchol_degree: "15",
    cocktail_description:
      "모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는\n\n럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기\n\n럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기",
    cocktail_ingredients: ["데낄라", "오렌지쥬스", "석류시럽"],
    cocktail_price: "10000",
  },
};

const CocktailPage = ({ contentRef }) => {
  // TODO: API
  // parse cocktailbarId from dynamic path
  // & API

  useEffect(() => {
    contentRef.current.style.paddingBottom = "7em";
  }, []);

  return (
    <>
      <FullImg img={dummyDidMount.cocktail_info.cocktail_order_img}></FullImg>
      <ContentCol
        upper={dummyDidMount.cocktail_info.cocktail_korname}
        lower={dummyDidMount.cocktail_info.cocktail_engname}
      ></ContentCol>
      <Space h="xs"></Space>
      <div style={{ display: "flex" }}>
        {dummyDidMount.cocktail_info.cocktail_ingredients.map((ingredient) => {
          return (
            <>
              <Text key={ingredient} weight="bold">
                {ingredient}
              </Text>
              <Space w="md"></Space>
            </>
          );
        })}
      </div>
      <Space h="md"></Space>
      <Text style={{ whiteSpace: "pre-wrap" }}>
        {dummyDidMount.cocktail_info.cocktail_description}
      </Text>
      <Text weight={"bold"} size={"2em"}>
        {dummyDidMount.cocktail_info.cocktail_price}
      </Text>
      <FullButton>주문하기</FullButton>
    </>
  );
};

export default CocktailPage;
