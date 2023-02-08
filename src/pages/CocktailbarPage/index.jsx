import { Text } from "@mantine/core";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import TextWithIcon from "../../components/molecules/TextWithIcon";
import clockIcon from "../../assets/img/clockIcon.png";
import locationDotSolid from "../../assets/img/locationDotSolid.png";
import CocktailCarousel from "../../components/molecules/CocktailCarousel";
import FullImg from "../../components/molecules/FullImg";
import { useParams } from "react-router-dom";
import FullButton from "../../components/molecules/FullButton";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import barsAPI from "firebases/bars";

const CocktailbarPage = ({ contentRef }) => {
	const [bar, setBar] = useState({});
	const { barName } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		contentRef.current.style.paddingBottom = "7em";
		barsAPI.getBarByName(barName).then((data) => setBar(data));
	}, []);

	return (
		<>
			<FullImg src={bar.imageUrl}></FullImg>
			<SubtitleRow left={bar.name}></SubtitleRow>
			<Text>별점: {bar.stars + "점"} </Text>

			<TextWithIcon icon={locationDotSolid} right={bar.address}></TextWithIcon>
			<TextWithIcon icon={clockIcon} right={bar.worktime}></TextWithIcon>

			<Text
				weight="bold"
				sx={{ marginTop: "1rem" }}
				color={"var(--primary-color)"}
			>
				인기칵테일
			</Text>

			<CocktailCarousel signatures={bar.signatures}></CocktailCarousel>
			<FullButton
				handleClick={() => navigate(`/cocktailbar/${barName}/order/menu`)}
			>
				메뉴보기
			</FullButton>
		</>
	);
};

export default CocktailbarPage;
