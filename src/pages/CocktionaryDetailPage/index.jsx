import { useEffect, useState } from "react";

import * as S from "./style";

import { getCocktionaryCocktailDetails } from "../../apis/getCocktionaryCocktailDetails";
import FullImg from "../../components/molecules/FullImg";
import { Badge, Space, Text } from "@mantine/core";

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
  cocktail_id: "1",
  cocktail_order_img: "", // 주문전용 칵테일 디비
  cocktail_korname: "모히또",
  cocktail_engname: "Mojito",
  cocktail_alchol_degree: "15",
  cocktail_description:
    "모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는\n\n럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기\n\n럼 기반 머시기 머시기 모히또는 럼 기반 머시기 머시기",
  cocktail_ingredients: ["데낄라", "오렌지쥬스", "석류시럽"],
  cocktail_price: "10000",
  cocktail_img_for_order: "",
};

const CocktionaryDetailPage = () => {
  const [cocktails, setCocktails] = useState(dummyDidMount);
  // TODO: uncomment when api connect!
  // useEffect(() => {
  //   (async () => {
  //     const fetchData = await getCocktionaryCocktailDetails();
  //     setCocktails(fetchData);
  //   })();
  // }, []);

  return (
    <>
      <FullImg img={dummyDidMount.cocktail_img_for_order}></FullImg>
      <Space h="xl"></Space>
      <Text color="var(--primary-color)" size="2.5em">
        {dummyDidMount.cocktail_engname}
      </Text>
      <S.RowWrapper>
        {dummyDidMount.cocktail_ingredients.map((ingredient) => {
          return (
            <Badge style={{ margin: "0.5em 0.6em 0 0" }} color="violet">
              {ingredient}
            </Badge>
          );
        })}
      </S.RowWrapper>
      <Space h="xl"></Space>
      <Text color="var(--primary-color)" weight="bold" size="lg">
        재료
      </Text>
      <Text>{dummyDidMount.cocktail_ingredients}</Text>
      <Space h="md"></Space>
      <Text color="var(--primary-color)" weight="bold" size="lg">
        믹스방법
      </Text>
      <Text>{dummyDidMount.cocktail_description}</Text>
    </>
  );
};

export default CocktionaryDetailPage;
