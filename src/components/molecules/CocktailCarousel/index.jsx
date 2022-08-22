import { Carousel } from "@mantine/carousel";
import { useNavigate } from "react-router-dom";
import CocktailVertical from "../CocktailVertical";

const CocktailCarousel = ({ cocktails }) => {
  const navigate = useNavigate();

  return (
    <Carousel dragFree slideSize="33.333333%" slideGap="xs" loop align="start">
      {cocktails.map((cocktail) => {
        return (
          <Carousel.Slide key={cocktail.cocktail_id}>
            <CocktailVertical
              onClick={() =>
                navigate(`./order/cocktail/${cocktail.cocktail_id}`)
              }
              img={cocktail.cocktail_img}
              name={cocktail.cocktail_korname}
            ></CocktailVertical>
          </Carousel.Slide>
        );
      })}
    </Carousel>
  );
};

export default CocktailCarousel;
