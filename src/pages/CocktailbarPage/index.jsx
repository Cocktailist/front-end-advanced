import { Text } from "@mantine/core";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import TextWithIcon from "../../components/molecules/TextWithIcon";
import clockIcon from "../../assets/img/clockIcon.svg";
import locationDotSolid from "../../assets/img/locationDotSolid.svg";
import CocktailCarousel from "../../components/molecules/CocktailCarousel";
import FullImg from "../../components/molecules/FullImg";
import { useParams } from "react-router-dom";

import cocktailbarimg1 from "../../../src/assets/img/cocktailbar_image1.png";
import cocktailbarimg2 from "../../../src/assets/img/cocktailbar_image2.png";
import d_01 from "../../../src/assets/img/d_01.jpg"; // 미도리사워
import d_02 from "../../../src/assets/img/d_02.jpg"; // 데낄라 선라이즈
import d_03 from "../../../src/assets/img/d_03.jpg"; // 준벅
import d_04 from "../../../src/assets/img/d_04.jpg"; // 블루 하와이안
import d_05 from "../../../src/assets/img/d_05.jpg"; // 사이드카
import d_06 from "../../../src/assets/img/d_06.jpg"; // 모히또

// GET 메인페이지 처음으로 할때
const dummyDidMount = [
  {
    cocktailbar_info: {
      cocktailbar_id: "0",
      cocktailbar_img: cocktailbarimg1,
      cocktailbar_name: "도파민",
      cocktailbar_stars: "4.3점",
      cocktailbar_address: "대구 중구 동성로 1길 2층",
      cocktailbar_worktime: "화-일 19:00-07:00 / 월요일 휴무",
    },
    signatures: [
      { cocktail_id: "0", cocktail_img: d_01, cocktail_korname: "모히또" },
      {
        cocktail_id: "1",
        cocktail_img: d_02,
        cocktail_korname: "데낄라 선라이즈",
      },
      { cocktail_id: "2", cocktail_img: d_03, cocktail_korname: "준벅" },
      {
        cocktail_id: "3",
        cocktail_img: d_04,
        cocktail_korname: "블루 하와이안",
      },
      { cocktail_id: "4", cocktail_img: d_05, cocktail_korname: "사이드 카" },
      { cocktail_id: "5", cocktail_img: d_06, cocktail_korname: "미도리사워" },
    ],
  },
  {
    cocktailbar_info: {
      cocktailbar_id: "1",
      cocktailbar_img: cocktailbarimg2,
      cocktailbar_name: "나빌레라",
      cocktailbar_address: "대구 중구 동성로5길 52 지하1층",
      cocktailbar_worktime: "매일 15:00 ~ 03:00",
      cocktailbar_stars: "4.5점",
    },
    signatures: [
      { cocktail_id: "0", cocktail_img: d_01, cocktail_korname: "모히또" },
      {
        cocktail_id: "1",
        cocktail_img: d_02,
        cocktail_korname: "데낄라 선라이즈",
      },
      { cocktail_id: "2", cocktail_img: d_03, cocktail_korname: "준벅" },
      {
        cocktail_id: "3",
        cocktail_img: d_04,
        cocktail_korname: "블루 하와이안",
      },
      { cocktail_id: "4", cocktail_img: d_05, cocktail_korname: "사이드 카" },
      { cocktail_id: "5", cocktail_img: d_06, cocktail_korname: "미도리사워" },
    ],
  },
];

const CocktailbarPage = () => {
  const { cocktailbarId } = useParams();

  return (
    <>
      <FullImg
        src={cocktailbarId === "0" ? cocktailbarimg1 : cocktailbarimg2}
      ></FullImg>
      <SubtitleRow
        left={dummyDidMount[cocktailbarId].cocktailbar_info.cocktailbar_name}
      ></SubtitleRow>
      <Text>
        별점: {dummyDidMount[cocktailbarId].cocktailbar_info.cocktailbar_stars}
      </Text>

      <TextWithIcon
        icon={locationDotSolid}
        right={
          dummyDidMount[cocktailbarId].cocktailbar_info.cocktailbar_address
        }
      ></TextWithIcon>
      <TextWithIcon
        icon={clockIcon}
        right={
          dummyDidMount[cocktailbarId].cocktailbar_info.cocktailbar_worktime
        }
      ></TextWithIcon>

      <Text weight="bold" color={"var(--primary-color)"}>
        인기칵테일
      </Text>

      <CocktailCarousel
        cocktails={dummyDidMount[cocktailbarId].signatures}
      ></CocktailCarousel>
    </>
  );
};

export default CocktailbarPage;
