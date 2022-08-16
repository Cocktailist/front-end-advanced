import { useEffect, useState } from "react";

import * as S from "./style";

import { getCocktionaryCocktails } from "../../apis/getCocktionaryCocktails";

// GET 메인페이지 처음으로 할때
const dummyDidMount = [
  {
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
  },
  {
    cocktail_id: "2",
    cocktail_order_img: "", // 주문전용 칵테일 디비
    cocktail_korname: "마가리따",
    cocktail_engname: "Magaritta",
    cocktail_alchol_degree: "23",
    cocktail_description:
      "마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 마가리따머시기 ",
    cocktail_ingredients: ["데낄라", "오렌지쥬스", "석류시럽"],
    cocktail_price: "20000",
    cocktail_img_for_order: "",
  },
];

const CocktionaryPage = () => {
  const [cocktails, setCocktails] = useState(dummyDidMount);
  // TODO: uncomment when api connect!
  // useEffect(() => {
  //   (async () => {
  //     const fetchData = await getCocktionaryCocktails();
  //     setCocktails(fetchData);
  //   })();
  // }, []);

  return (
    <>
      <S.Wrapper>
        {cocktails.map((cocktail) => (
          // <div>{cocktail.cocktail_korname}</div>
          <S.CocktailSection key={cocktail.cocktail_id}>
            <S.Img src={cocktail.cocktail_img_for_order}></S.Img>
            <S.Texts>
              <S.TextBig>{cocktail.cocktail_korname}</S.TextBig>
              <S.TextSmall>{cocktail.cocktail_engname}</S.TextSmall>
            </S.Texts>
          </S.CocktailSection>
        ))}
      </S.Wrapper>
    </>
  );
};

export default CocktionaryPage;
