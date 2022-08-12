import { Text } from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { Tabs } from "@mantine/core";
import CocktailImgWithText from "../../components/organisms/CocktailImgWithText";
import { useState } from "react";

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
  cocktails: [
    {
      cocktail_id: "1",
      cocktail_img: "",
      cocktail_korname: "준벅",
      cocktail_ingredients: ["럼", "민트", "라임", "설탕"],
      cocktail_recommended: "true",
    },
    {
      cocktail_id: "2",
      cocktail_img: "",
      cocktail_korname: "데낄라 선라이즈",
      cocktail_ingredients: ["데낄라", "오렌지쥬스", "석류시럽", "석류시럽"],
      cocktail_recommended: "false",
    },
    {
      cocktail_id: "3",
      cocktail_img: "",
      cocktail_korname: "미도리 사우어",
      cocktail_ingredients: ["미도리", "사이다"],
      cocktail_recommended: "true",
    },
    {
      cocktail_id: "4",
      cocktail_img: "",
      cocktail_korname: "미도리 사우어",
      cocktail_ingredients: ["미도리", "사이다"],
      cocktail_recommended: "false",
    },
    {
      cocktail_id: "5",
      cocktail_img: "",
      cocktail_korname: "미도리 사우어",
      cocktail_ingredients: ["미도리", "사이다"],
      cocktail_recommended: "true",
    },
    {
      cocktail_id: "6",
      cocktail_img: "",
      cocktail_korname: "우하하하",
      cocktail_ingredients: ["ABC", "DEF"],
      cocktail_recommended: "true",
    },
  ],
};

const OrderPage = () => {
  // TODO: API
  // const { cocktailbarId } = useParams();
  const navigate = useNavigate();
  const [views, setViews] = useState("all");

  return (
    <>
      <Tabs
        color={"var(--primary-color)"}
        defaultValue="all"
        style={{
          transform: "translateX(-1.5em) translateY(-1.5em)",
          position: "fixed",
          backgroundColor: "white",
        }}
        onTabChange={(value) => {
          navigate(`?views=${value}`);
          setViews(`${value}`);
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="all">
            <Text size="lg">전체 메뉴</Text>
          </Tabs.Tab>
          <Tabs.Tab value="recommend">
            <Text size="lg">추천 메뉴</Text>
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {dummyDidMount.cocktails.map((cocktail) => {
        if (views === "recommend" && cocktail.cocktail_recommended === "false")
          return null;
        return (
          <CocktailImgWithText
            key={cocktail.cocktail_id}
            to={cocktail.cocktail_id}
            img={cocktail.cocktail_img}
            upper={cocktail.cocktail_korname}
            lower={cocktail.cocktail_ingredients}
          ></CocktailImgWithText>
        );
      })}
    </>
  );
};

export default OrderPage;
