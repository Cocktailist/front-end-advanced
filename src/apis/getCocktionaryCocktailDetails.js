import axios from "axios";
import config from "../config";

// 백엔드로 요청 보내는 함수
export const getCocktionaryCocktails = async () => {
  axios
    .get(`${config.API_ADDRESS}`) // cocktaionary api path 추가
    .then((response) => {
      console.log("칵셔터리리스트 가져옴", response.data);
      return response.data;
    })
    .catch((e) => {
      // 요청보내놓고 에러를 캐치하는곳
      console.log(e.response.data);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};
