import { Select, Image, Badge, Space } from "@mantine/core";
import TitleRow from "../../components/molecules/TitleRow";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import Divider from "../../components/molecules/Divider";
import Post from "../../components/organisms/Post";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

// GET 주변 칵테일 드롭다운에서 하나를 클릭했을때
const dummyDidUpdate = [
  {
    cocktailbar_id: "1",
    cocktailbar_img: "",
    cocktailbar_name: "도파민",
    cocktailbar_onesentence: "동성로 술집 황홀한 대구 야경 칵테일",
    cocktailbar_hashtags: ["관람차", "야경", "시그니쳐칵테일"],
  },
  {
    cocktailbar_id: "2",
    cocktailbar_img: "",
    cocktailbar_name: "나빌레라",
    cocktailbar_onesentence: "동성로의 분위기 좋은 바",
    cocktailbar_hashtags: ["동성로", "분위기짱", "숨은맛집"],
  },
];

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
  cocktailbars: [
    { cocktailbar_name: "도파민", cocktailbar_id: "1" },
    { cocktailbar_name: "나빌레라", cocktailbar_id: "2" },
  ],
  posts: [
    {
      post_id: "1",
      post_nick_name: "멋있는 바지",
      post_board: "나눔 게시판",
      post_date: "22.08.20",
      post_content_title: "앱솔루트 대용량 있는데 가지실분?",
      post_content:
        "한 400ml 남았는데, 미리당 500원에 받겠습니다. 교환도 가능!",
    },
    {
      post_id: "2",
      post_nick_name: "신나는 오징어",
      post_board: "나눔 게시판",
      post_date: "22.07.01",
      post_content_title: "레몬 교환하실분",
      post_content:
        "저번에 친구들 집에와서 홈칵테일한다구 만들었는데, 많이 남았음. 다른 베이스술이랑 교환하고싶어요!",
    },
  ],
};

const MainPage = () => {
  const [value, setValue] = useState("0");
  const navigate = useNavigate();

  return (
    <>
      <Select
        value={value}
        onChange={setValue}
        placeholder="주변 칵테일바"
        dropdownComponent="div"
        data={[
          { value: "0", label: "도파민" },
          { value: "1", label: "나빌레라" },
        ]}
      />
      <TitleRow left="오늘의 추천 칵테일바" right="more"></TitleRow>
      <Image
        onClick={() => navigate(`/cocktailbar/${value}`)}
        radius="md"
        height="12em"
        src={
          value === "0"
            ? "/images/cocktailbar_image1.png"
            : "/images/cocktailbar_image2.png"
        }
        alt="With default placeholder"
        withPlaceholder
      />
      <SubtitleRow
        left={dummyDidUpdate[value].cocktailbar_name}
        right={dummyDidUpdate[value].cocktailbar_onesentence}
      ></SubtitleRow>
      <div style={{ display: "flex" }}>
        {dummyDidUpdate[value].cocktailbar_hashtags.map((tag) => {
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
      })}
    </>
  );
};

export default MainPage;
