import { Image, Badge, Space, Text, Carousel } from "@mantine/core";
import TitleRow from "../../components/molecules/TitleRow";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import TextWithIcon from "../../components/molecules/TextWithIcon";
import Divider from "../../components/molecules/Divider";
import Post from "../../components/organisms/Post";
import clockIcon from "../../assets/img/clockIcon.svg";
import locationDotSolid from "../../assets/img/locationDotSolid.svg";
import CocktailVertical from "../../components/molecules/CocktailVertical";
import CocktailCarousel from "../../components/molecules/CocktailCarousel";

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

      {/* <div style={{ display: "flex" }}>
        {dummyDidMount.signatures.map((menu) => {
          return (
            <CocktailVertical
              key={menu.cocktail_id}
              img={menu.cocktail_img}
              name={menu.cocktail_korname}
            ></CocktailVertical>
          );
        })}
      </div> */}

      <CocktailCarousel cocktails={dummyDidMount.signatures}></CocktailCarousel>

      {/* <div style={{ display: "flex" }}>
        {dummyDidUpdate.cocktailbar_info.cocktailbar_hashtags.map((tag) => {
          return (
            <>
              <Badge color="violet">{tag}</Badge>
              <Space w="xs" />
            </>
          );
        })}
      </div>
      <Divider></Divider>
      <TitleRow left="실시간 인기글" right="more"></TitleRow>
      {dummyDidMount.posts.map((post) => {
        return (
          <Post
            nick_name={post.post_nick_name}
            board={post.post_board}
            date={post.post_date}
            upper={post.post_content_title}
            lower={post.post_content}
          ></Post>
        );
      })} */}
    </>
  );
};

export default CocktailbarPage;
