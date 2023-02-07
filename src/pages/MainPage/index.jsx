import { Select, Image, Badge, Space } from "@mantine/core";
import TitleRow from "components/molecules/TitleRow";
import SubtitleRow from "components/molecules/SubtitleRow";
import Divider from "components/molecules/Divider";
import Post from "components/organisms/Post";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import barsAPI from "firebases/bars";

// GET 메인페이지 처음으로 할때
const dummyDidMount = {
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
	const [bars, setBars] = useState([]);
	const [currentBar, setCurrentBar] = useState(0);
	const navigate = useNavigate();

	useEffect(() => {
		barsAPI.getBars().then((value) => setBars(value));
	}, []);

	if (bars.length == 0) return <div>Fetching</div>;

	return (
		<>
			<Select
				value={currentBar}
				onChange={setCurrentBar}
				placeholder="주변 칵테일바"
				data={bars.map((bar, idx) => {
					return { value: idx, label: bar.name };
				})}
			/>
			<TitleRow left="오늘의 추천 칵테일바" right="more"></TitleRow>
			<Image
				onClick={() => navigate(`/cocktailbar/${bars[currentBar].name}`)}
				radius="md"
				height="12em"
				src={bars[currentBar].imageUrl}
				alt="With default placeholder"
				withPlaceholder
			/>
			<SubtitleRow
				left={bars[currentBar].name}
				right={bars[currentBar].description}
			></SubtitleRow>
			<div style={{ display: "flex" }}>
				{bars[currentBar].tags.map((tag) => {
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
