import styled from "styled-components";
// import { Wrapper, Img, Texts, TextBig, TextSmall }

/** Container flex-row (space between) */
export const TodayCocktailBarHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0px;
`;

export const Wrapper = styled.div`
  height: 100%;
  margin: 0px auto;
  margin-top: 20px;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Img = styled.img`
  width: 60%;
  height: 150px;
  margin-top: 30px;
`;

export const Texts = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const TextBig = styled.div``;

export const TextSmall = styled.div``;

export const CocktailSection = styled.div`
  margin-top: 20px;
  width: 45%;
  height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: rgb(176, 176, 176);
  border-style: solid;
  border-radius: 10px;
`;
