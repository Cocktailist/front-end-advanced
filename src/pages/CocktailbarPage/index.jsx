import { Text } from "@mantine/core";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import TextWithIcon from "../../components/molecules/TextWithIcon";
import clockIcon from "../../assets/img/clockIcon.png";
import locationDotSolid from "../../assets/img/locationDotSolid.png";
import CocktailCarousel from "../../components/molecules/CocktailCarousel";
import FullImg from "../../components/molecules/FullImg";
import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import barsAPI from "firebases/bars";

const CocktailbarPage = () => {
	const [bar, setBar] = useState({});
	const { barName } = useParams();

	useEffect(() => {
		barsAPI.getBarByName(barName).then((data) => setBar(data));
	}, []);

	return (
		<>
			<FullImg src={bar.imageUrl}></FullImg>
			<SubtitleRow left={bar.name}></SubtitleRow>
			<Text>별점: {bar.stars + "점"} </Text>

			<TextWithIcon icon={locationDotSolid} right={bar.address}></TextWithIcon>
			<TextWithIcon icon={clockIcon} right={bar.worktime}></TextWithIcon>

			<Text weight="bold" color={"var(--primary-color)"}>
				인기칵테일
			</Text>

			<CocktailCarousel signatures={bar.signatures}></CocktailCarousel>
		</>
	);
};

export default CocktailbarPage;
