import { Select, Image, Badge, Space } from "@mantine/core";
import TitleRow from "../../components/molecules/TitleRow";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import Divider from "../../components/molecules/Divider";
import Post from "../../components/organisms/Post";

// GET 주변 칵테일 드롭다운에서 하나를 클릭했을때
const dummyDidUpdate = {
  cocktailbar_info: {
    cocktailbar_id: "1",
    cocktailbar_img: "",
    cocktailbar_name: "도파민",
    cocktailbar_onesentence: "동성로 술집 황홀한 대구 야경 칵테일",
    cocktailbar_hashtags: ["관람차", "야경", "시그니쳐칵테일"],
  },
};

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
  cocktailbars: [
    { cocktailbar_name: "도파민", cocktailbar_id: "1" },
    { cocktailbar_name: "아드레날린", cocktailbar_id: "2" },
  ],
  posts: [
    {
      post_id: "1",
      post_nick_name: "닉네임",
      post_board: "나눔 게시판",
      post_date: "22.07.01",
      post_content_title: "포스트제목",
      post_content: "asdfasdfasdfasdf 컨텐츠 컨텐츠",
    },
    {
      post_id: "2",
      post_nick_name: "닉네임",
      post_board: "나눔 게시판",
      post_date: "22.07.01",
      post_content_title: "포스트제목",
      post_content: "컨텐츠 컨텐츠 컨텐츠",
    },
  ],
};

const MainPage = () => {
  return (
    <>
      <Select
        placeholder="주변 칵테일바"
        data={[{ value: "dopamin", label: "도파민" }]}
      />
      <TitleRow left="오늘의 추천 칵테일바" right="more"></TitleRow>
      <Image
        radius="md"
        height="12em"
        src=""
        alt="With default placeholder"
        withPlaceholder
      />
      <SubtitleRow
        left={dummyDidUpdate.cocktailbar_info.cocktailbar_name}
        right={dummyDidUpdate.cocktailbar_info.cocktailbar_onesentence}
      ></SubtitleRow>
      <div style={{ display: "flex" }}>
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
      })}
    </>
  );
};

export default MainPage;
