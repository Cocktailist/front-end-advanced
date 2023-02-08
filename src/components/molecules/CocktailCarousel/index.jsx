import { Carousel } from "@mantine/carousel";
import cocktailsAPI from "firebases/cocktails";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CocktailVertical from "../CocktailVertical";

const CocktailCarousel = ({ signatures }) => {
	const navigate = useNavigate();

	const [cocktails, setCocktails] = useState([]);

	useEffect(() => {
		if (!signatures?.length) return;
		cocktailsAPI.getCocktailsByEngNames(signatures).then((data) => {
			setCocktails(data);
		});
	}, [signatures]);

	if (cocktails.length === 0) return <div>Fetching</div>;

	return (
		<Carousel dragFree slideSize="33.333333%" slideGap="xs" loop align="start">
			{cocktails.map((cocktail, idx) => {
				return (
					<Carousel.Slide key={idx}>
						<CocktailVertical
							onClick={() => navigate(`./order/cocktail/${cocktail.name}`)}
							img={cocktail.imageUrl}
							name={cocktail.engname}
						></CocktailVertical>
					</Carousel.Slide>
				);
			})}
		</Carousel>
	);
};

export default CocktailCarousel;
