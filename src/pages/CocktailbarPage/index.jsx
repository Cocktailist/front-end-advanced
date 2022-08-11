import { Text } from "@mantine/core";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import TextWithIcon from "../../components/molecules/TextWithIcon";
import clockIcon from "../../assets/img/clockIcon.svg";
import locationDotSolid from "../../assets/img/locationDotSolid.svg";
import CocktailCarousel from "../../components/molecules/CocktailCarousel";
import FullImg from "../../components/molecules/FullImg";

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
  cocktailbar_info: {
    cocktailbar_id: "1",
    cocktailbar_img: "",
    cocktailbar_name: "도파민",
    cocktailbar_stars: "4.5",
    cocktailbar_address: "대구 중구 동성로 1길 2층",
    cocktailbar_worktime: "화-일 19:00-07:00 / 월요일 휴무",
  },
  signatures: [
    { cocktail_id: "1", cocktail_img: "", cocktail_korname: "준벅" },
    { cocktail_id: "2", cocktail_img: "", cocktail_korname: "데낄라 선라이즈" },
    { cocktail_id: "3", cocktail_img: "", cocktail_korname: "마가리따" },
    { cocktail_id: "3", cocktail_img: "", cocktail_korname: "마가리따" },
    { cocktail_id: "3", cocktail_img: "", cocktail_korname: "마가리따" },
  ],
};

const CocktailbarPage = () => {
  // TODO: API
  // parse cocktailbarId from dynamic path
  // & API

  return (
    <>
      <FullImg></FullImg>
      <SubtitleRow
        left={dummyDidMount.cocktailbar_info.cocktailbar_name}
      ></SubtitleRow>
      <Text>별점: {dummyDidMount.cocktailbar_info.cocktailbar_stars}</Text>

      <TextWithIcon
        icon={locationDotSolid}
        right={dummyDidMount.cocktailbar_info.cocktailbar_address}
      ></TextWithIcon>
      <TextWithIcon
        icon={clockIcon}
        right={dummyDidMount.cocktailbar_info.cocktailbar_worktime}
      ></TextWithIcon>

      <Text weight="bold" color={"var(--primary-color)"}>
        인기칵테일
      </Text>

      <CocktailCarousel cocktails={dummyDidMount.signatures}></CocktailCarousel>
    </>
  );
};

export default CocktailbarPage;
