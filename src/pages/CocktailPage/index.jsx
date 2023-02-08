/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Text, Space, Drawer, useMantineTheme, Modal } from "@mantine/core";
import FullImg from "../../components/molecules/FullImg";
import ContentCol from "../../components/molecules/ContentCol";
import FullButton from "../../components/molecules/FullButton";
import CustomizingSection from "../../components/organisms/CustomizingSection";

import { useParams } from "react-router-dom";
import cocktailsAPI from "firebases/cocktails";

const CocktailPage = ({ contentRef }) => {
	const theme = useMantineTheme();

	const { barName, cocktailName } = useParams();
	const [cocktail, setCocktail] = useState({});
	const [opened, setOpened] = useState(false);

	useEffect(() => {
		contentRef.current.style.paddingBottom = "7em";
		cocktailsAPI
			.getCocktailByKorName(cocktailName)
			.then((data) => setCocktail(data));
	}, []);

	if (cocktail?.korname === undefined) return <div>Fetching</div>;

	return (
		<>
			<FullImg src={cocktail.imageUrl}></FullImg>
			<ContentCol
				upper={cocktail.korname}
				lower={cocktail.engname}
			></ContentCol>
			<Space h="xs"></Space>
			<div style={{ display: "flex", flexWrap: "wrap" }}>
				{cocktail.ingredients.map((ingredient) => {
					return (
						<>
							<Text key={ingredient} weight="bold">
								{ingredient}
							</Text>
							<Space w="md"></Space>
						</>
					);
				})}
			</div>
			<Space h="md"></Space>
			<Text style={{ whiteSpace: "pre-wrap" }}>{cocktail.description}</Text>
			<Text weight={"bold"} size={"2em"}>
				{cocktail.price + " 원"}
			</Text>
			<FullButton handleClick={() => setOpened(true)}>주문하기</FullButton>
			<Drawer
				overlayColor={theme.colors.gray[9]}
				overlayOpacity={0.55}
				overlayBlur={1}
				opened={opened}
				onClose={() => setOpened(false)}
				size="77vh"
				position="bottom"
				style={{
					transform: "translateY(-3.5em)",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<CustomizingSection options={cocktail.ingredients} />
			</Drawer>
		</>
	);
};

export default CocktailPage;
