import { Text } from "@mantine/core";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import TextWithIcon from "../../components/molecules/TextWithIcon";
import clockIcon from "../../assets/img/clockIcon.png";
import locationDotSolid from "../../assets/img/locationDotSolid.png";
import CocktailCarousel from "../../components/molecules/CocktailCarousel";
import FullImg from "../../components/molecules/FullImg";
import axios from "axios";
import config from "../../config";
import { useEffect, useState } from "react";

function strToArrByDel(str, del) {
  return str.split(del).map((e) => e.trim());
}

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
    // cocktailbar_id 가 1인 칵테일바의 칵테일 목록 뽑아오기
    { cocktail_id: "1", cocktail_img: "", cocktail_korname: "준벅" },
    { cocktail_id: "2", cocktail_img: "", cocktail_korname: "데낄라 선라이즈" },
    { cocktail_id: "3", cocktail_img: "", cocktail_korname: "마가리따" },
  ],
};

const CocktailbarPage = () => {
  // TODO: API
  // parse cocktailbarId from dynamic path
  // & API

  const [ready, setReady] = useState(false);
  const [cocktailbarData, setcocktailbarData] = useState({});
  const [signatureData, setsignatureData] = useState([]);
  const [cocktailbar_id, setCocktailbar_id] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const path = window.location.href.substring(
        window.location.href.lastIndexOf("/") + 1
      );
      setCocktailbar_id(path);
      const res = await axios.get(`${config.API_ADDRESS}/cocktailbar/${path}`);
      setcocktailbarData(JSON.parse(JSON.stringify(res.data)));
      setReady(true);
    }
    fetchData();
  }, []);

  return (
    <>
      <FullImg></FullImg>
      <SubtitleRow
        left={ready ? cocktailbarData.cocktailbar_name : ""}
      ></SubtitleRow>
      <Text>별점: {ready ? cocktailbarData.cocktailbar_stars : ""}</Text>

      <TextWithIcon
        icon={locationDotSolid}
        right={ready ? cocktailbarData.cocktailbar_address : ""}
      ></TextWithIcon>
      <TextWithIcon
        icon={clockIcon}
        right={ready ? cocktailbarData.cocktailbar_worktime : ""}
      ></TextWithIcon>

      <Text weight="bold" color={"var(--primary-color)"}>
        인기칵테일
      </Text>

      {/* TODO: 서버에서 받아온 데이터로 바꾸기! */}
      <CocktailCarousel
        cocktailbar_id={cocktailbar_id}
        cocktails={signatureData}
      ></CocktailCarousel>
    </>
  );
};

export default CocktailbarPage;
