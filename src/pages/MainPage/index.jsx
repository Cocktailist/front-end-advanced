import { Select, Image, Badge, Space } from "@mantine/core";
import TitleRow from "../../components/molecules/TitleRow";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import Divider from "../../components/molecules/Divider";
import Post from "../../components/organisms/Post";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../config";

function strToArrByDel(str, del) {
  return str.split(del).map((e) => e.trim());
}

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
  const [dataDidMount, setDataDidMount] = useState("");
  const [ready, setReady] = useState(false);
  const [id, setId] = useState("0");
  const [value, setValue] = useState("0");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(`${config.API_ADDRESS}/cocktailbar/all`);
      // 이렇게하면 배열이 리턴된다.
      console.log("hello", res.data);
      setDataDidMount(JSON.parse(JSON.stringify(res.data)));
      setReady(true);
    }
    fetchData();
  }, []);

  return (
    <>
      <Select
        value={value}
        onChange={setValue}
        placeholder="주변 칵테일바"
        data={
          ready
            ? dataDidMount.map((cocktailbar, idx) => {
                return {
                  value: idx + "", //string 으로 해야함
                  label: cocktailbar.cocktailbar_name,
                };
              })
            : []
        }
      />
      <TitleRow left="오늘의 추천 칵테일바" right="more"></TitleRow>
      {ready ? (
        <Image
          radius="md"
          height="12em"
          src={ready ? dataDidMount[parseInt(value)].cocktailbar_img : ""}
          alt="With default placeholder"
          withPlaceholder
          onClick={() =>
            navigate(
              `/cocktailbar/${dataDidMount[parseInt(value)].cocktailbar_id}`
            )
          }
        />
      ) : null}
      {ready ? (
        <SubtitleRow
          onClick={() =>
            navigate(
              `/cocktailbar/${dataDidMount[parseInt(value)].cocktailbar_id}`
            )
          }
          left={dataDidMount[parseInt(value)].cocktailbar_name}
          right={dataDidMount[parseInt(value)].cocktailbar_description}
        ></SubtitleRow>
      ) : null}

      {ready ? (
        <div style={{ display: "flex" }}>
          {strToArrByDel(
            dataDidMount[parseInt(value)].cocktailbar_hashtags,
            "#"
          ).map((tag) => {
            return (
              <>
                <Badge color="violet">{tag}</Badge>
                <Space w="xs" />
              </>
            );
          })}
        </div>
      ) : null}
      <Divider></Divider>
      <TitleRow left="실시간 인기글" right="more"></TitleRow>
      {ready
        ? dummyDidMount.posts.map((post) => {
            return (
              <Post
                nick_name={post.post_nick_name}
                board={post.post_board}
                date={post.post_date}
                upper={post.post_content_title}
                lower={post.post_content}
              ></Post>
            );
          })
        : null}
    </>
  );
};

export default MainPage;
