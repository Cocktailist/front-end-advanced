/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Text, Space, Drawer, useMantineTheme, Modal } from "@mantine/core";
import FullImg from "../../components/molecules/FullImg";
import ContentCol from "../../components/molecules/ContentCol";
import FullButton from "../../components/molecules/FullButton";
import CustomizingSection from "../../components/organisms/CustomizingSection";

import { useParams } from "react-router-dom";

// GET 메인페이지 처음으로 할때
const dummyDidMount = [
  {
    cocktail_id: "0",
    cocktail_order_img: "/images/d_06.jpg",
    cocktail_korname: "모히또",
    cocktail_engname: "Mojito",
    cocktail_alchol_degree: "15",
    cocktail_description: `럼 베이스 칵테일로, 명칭은 마법의 부적이라는 의미의 스페인어인 ‘Mojo’ 에서 유래한 것이다.

    기본적으로 럼 피즈에 민트를 첨가한 것이라고 할 수 있지만 민트의 시원한 청량감에 의해 훨씬 산뜻한 맛을 낸다. 라임과 민트의 밝은 초록색이 돋보여 시각적으로도 청량감을 준다.
    
    맛은 달달함과 동시에 민트 향을 내면서 씁쓸한 뒷맛이 스쳐가니 나름 입체적인 맛이라 할 수 있다.`,
    cocktail_ingredients: ["민트잎", "슈가시럽", "얼음"],
    cocktail_price: "10000",
  },
  {
    cocktail_id: "1",
    cocktail_order_img: "/images/d_02.jpg",
    cocktail_korname: "데킬라 선라이즈",
    cocktail_engname: "Tequila Sunrise",
    cocktail_alchol_degree: "15",
    cocktail_description: `
    데킬라를 베이스로 하는 칵테일이며, 이름은 일출을 닮았다고 해서 붙여진 이름이다. 오렌지 주스와 그레나딘 시럽이 들어가 잘 넘어가는 편. 때문에 주의할 필요가 있다.

    1930년대부터 만들어진 술이지만 영국의 전설적인 록밴드 롤링 스톤스가 그들의 전성기인 Exile on Main St. 1972투어에서 즐겨마시면서 유명해졌다고 한다. 심지어 1972투어를 데킬라 선라이즈 투어라고 불려지기도했다고 한다.
    
    데킬라를 제외시키면 선라이즈, 데킬라 대신 레모네이드나 스프라이트를 쓰면 레드 씨 선라이즈라는 논 알콜 칵테일이 된다. 데킬라를 보드카로 바꾸면 보드카 선라이즈(혹은 러시아 선라이즈), 럼으로 바꾸면 캐리비안 선라이즈가 된다. 또 그레나딘 시럽을 블랙베리 브랜디나 다크 럼으로 바꾸면 데킬라 선셋이 된다.
    
    아이러브커피에서 2016년 7월 4주년 한정 메뉴로 등장하였다. 게임 내 이름은 4주년 기념 데낄라 선라이즈.
    
    `,
    cocktail_ingredients: ["데킬라", "블랑꼬", "주스", "석류즙", "오렌지"],
    cocktail_price: "9500",
  },
  {
    cocktail_id: "2",
    cocktail_order_img: "/images/d_03.jpg",
    cocktail_korname: "준벅",
    cocktail_engname: "June Bug",
    cocktail_alchol_degree: "15",
    cocktail_description: `리큐르 베이스. 6월의 벌레라는 이름의 칵테일이지만 벌레의 이미지는 없고 6월의 푸르름을 표현한 칵테일. 6월에 자주 등장하는 초록꽃무지에서 유래됐다는 말도 있다.

    향과 맛이 달콤하기로 유명한 리큐르인 말리부가 들어가서 달달한 맛을 낸다. 비교적 역사가 짧은 칵테일임에도 불구하고 널리 퍼져나가 국내의 모든 바에서 쉽게 찾을 수 있다. 조주기능사 실기 시험의 레시피 중 하나로도 등록되어 있다.
    
    흔히 국내에서 만들어진 대표적인 칵테일이라고 한다. 국내에서는 90년대 부산에 있는 TGI Fridays에서 만들어진 것이라고 많이 알려져있고, 한국 TGIF 사이트에서도 한국인이 만든 칵테일이라고 소개하고 있다. 그러나 부산의 TGI가 개업한 것이 2000년이므로 부산에서 만들어진 것은 시간순서가 맞지 않다. 반면 해외에서는 미시건의 TGI에서 유래되었다는 주장이 있다.
    
    확실한 것은 TGI Fridays에서 개발된 칵테일이라는 것뿐이며, 국내뿐만 아니라 전세계 TGI에서 서빙되고 있다는 사실이다.`,
    cocktail_ingredients: [
      "미도리",
      "말리부",
      "크렘 드 바나나",
      "파인애플 주스",
      "스윗 앤 사워 믹스",
    ],
    cocktail_price: "9500",
  },
  {
    cocktail_id: "3",
    cocktail_order_img: "/images/d_04.jpg",
    cocktail_korname: "블루 하와이안",
    cocktail_engname: "Blue Hawaiann",
    cocktail_alchol_degree: "13",
    cocktail_description: `럼 베이스. 1957년 해리 예(Harry Yee)라는 바텐더가 와이키키에 있는 하와이 마을에서 일하던 무렵에 볼스 영업사원이 회사 제품인 블루 큐라소로 만든 음료를 부탁하자 직접 만들어낸 칵테일이라고 한다.

    맛은 아주 미묘해서 무슨 맛이냐고 물으면 그냥 블루 하와이맛이라고 할 수 밖에 없다고 한다. 겨우겨우 비슷한 맛을 꼽으라면 파워에이드 마운틴블라스트, 폴라포 스포츠 맛 정도. 게다가 이것들 마저도 완전히 같은 맛은 아니다. 마운틴 블라스트에 좀 더 파인애플 향이 첨가된 느낌.
    
    선키스트에서 무알콜 칵테일 버전 블루 하와이를 팔고 있다. 편의점이나 마트에서 쉽게 찾을 수 있는 제품. 대부분의 PC방에서도 찾아볼 수 있다. 종종 학교 매점에서 발견되기도 하는데, 아무래도 칵테일의 이름이기 때문에 오해의 소지를 피하기 위해 캔의 겉면에 '학교 판매 가능한 무알콜 제품입니다'라고 써있다. 해당 제품에 대한 자세한 설명은 썬키스트 칵테일 문서 참조.`,
    cocktail_ingredients: [
      "앱솔루트 보드카",
      "블루 큐라소",
      "코코넛 시럽",
      "파인애플 주스",
      "체리",
    ],
    cocktail_price: "9500",
  },
  {
    cocktail_id: "4",
    cocktail_order_img: "/images/d_05.jpg",
    cocktail_korname: "사이드카",
    cocktail_engname: "Sidecar",
    cocktail_alchol_degree: "13",
    cocktail_description: `사이드카(Sidecar). 코냑을 기주로 트리플 섹(Triple Sec)과 레몬 주스를 셰이크 해 만드는 칵테일이다. 1차 세계대전에서 독일군 장교가 점령지(=프랑스)의 브랜디와 쿠엥트로(Cointreau), 레몬을 섞어 마신 것이 시작이라는 썰이 있지만, 이는 사이드카가 1차 세계대전 시기에 탄생했기 때문에 생긴 소설일 가능성이 높다. 오히려 화이트 레이디(White Lady)의 진을 코냑으로 변형했다는 설이 현실적이다. 다른 설은 셰이커에서 칵테일 글라스에 따르고 남은 술을 샷 글라스에 따라서 보너스로 제공한 데서 유래했다는 것이다. 그 보너스 샷이 바로 '사이드카'라는 것.
    `,
    cocktail_ingredients: ["꼬냑", "트리플 섹", "레몬 주스", "ORANGE ZEST"],
    cocktail_price: "9500",
  },
  {
    cocktail_id: "5",
    cocktail_order_img: "/images/d_01.jpg",
    cocktail_korname: "미도리사워",
    cocktail_engname: "Midori Sour",
    cocktail_alchol_degree: "10",
    cocktail_description: `칵테일의 한 종류. 멜론 리큐르의 한 종류인 미도리를 사용해 만드는 유명한 칵테일이다. 미도리 사와 또는 미도리 사워라고도 한다.

    미도리 샤워라고 쓰는 곳이 많으나 미도리 사워(sour)가 옳은 말이다.
    
    멜론맛인 미도리와 스윗&사워 믹스의 레몬향이 어우러져서 상큼한 색깔과 맛을 연출하는 것이 포인트.
    
    이름에 들어간 것처럼 미도리를 사용해야 올바른 미도리 사워라고 볼 수 있으나, 미도리 특유의 감기약 맛을 선호하지 않는 바텐더 중에는 선명한 메로나 향이 나는 타사의 리큐르를 사용하는 경우도 많다. 가격도 더 저렴하다
    
    흔히 국내의 바에서는 탄산이 들어가는 레시피로 만들어 주지만, 원래 레시피는 탄산이 들어가지 않는다. 탄산이 들어가지 않은 것이 더 부드럽고 맛이 좋다고는 하나, 개운한 느낌으로 즐기기 위해 탄산음료를 첨가해서 판매하는 듯 하다.[1]
    
    또한, 달걀 흰자를 넣어 쉐이크하여 마시는 경우도 있는데, 주로 서양쪽의 바텐더들이 선호한다고 한다. 실제로 서양권에서 사워라고 하면 난백이 들어가는 게 기본이어서 일어나는 일례
    
    90년대에 등장했으며 애플 마티니와 함께 90년대를 관통한 칵테일로 불리기도 한다.
    `,
    cocktail_ingredients: ["미도리", "스윗 앤 사워 믹스", "스프라이트"],
    cocktail_price: "9500",
  },
];

const CocktailPage = ({ contentRef }) => {
  // TODO: API
  // parse cocktailbarId from dynamic path
  // & API
  const theme = useMantineTheme();

  const { cocktailId } = useParams();
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    contentRef.current.style.paddingBottom = "7em";
  }, []);

  return (
    <>
      <FullImg src={dummyDidMount[cocktailId].cocktail_order_img}></FullImg>
      <ContentCol
        upper={dummyDidMount[cocktailId].cocktail_korname}
        lower={dummyDidMount[cocktailId].cocktail_engname}
      ></ContentCol>
      <Space h="xs"></Space>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {dummyDidMount[cocktailId].cocktail_ingredients.map((ingredient) => {
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
        {dummyDidMount[cocktailId].cocktail_description}
      </Text>
      <Text weight={"bold"} size={"2em"}>
        {dummyDidMount[cocktailId].cocktail_price + " 원"}
      </Text>
      <FullButton onClick={setOpened}>주문하기</FullButton>
      <Drawer
        overlayColor={theme.colors.gray[9]}
        overlayOpacity={0.55}
        overlayBlur={1}
        opened={opened}
        onClose={() => setOpened(false)}
        size="77vh"
        position="bottom"
        style={{
          transform: "translateY(-3.5em)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CustomizingSection
          options={dummyDidMount[cocktailId].cocktail_ingredients}
        />
      </Drawer>
    </>
  );
};

export default CocktailPage;
