import { Carousel } from "@mantine/carousel";
import CocktailVertical from "../CocktailVertical";

const CocktailCarousel = ({ cocktails }) => {
  return (
    <Carousel
      // height={200}
      dragFree
      slideSize="33.333333%"
      slideGap="xs"
      loop
      align="start"
    >
      {cocktails.map((cocktail) => {
        return (
          <Carousel.Slide key={cocktail.cocktail_id}>
            <CocktailVertical
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
