import axios from "axios";
import config from "../config";

export const getTest = async () => {
  axios
    .get(`${config.API_ADDRESS}`)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((e) => {
      console.log(e.response.data);
      alert("예기치 못한 에러가 발생했습니다.");
    });
};
