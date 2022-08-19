import { Carousel } from "@mantine/carousel";
import CocktailVertical from "../CocktailVertical";
import { useNavigate } from "react-router-dom";

const CocktailCarousel = ({ cocktails, cocktailbar_id }) => {
  // prevent error
  if (cocktails.length <= 0) {
    cocktails = [
      {
        cocktail_id: "",
        cocktail_img: "",
        cocktail_korname: "",
      },
    ];
  }

  const navigate = useNavigate();

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
          <Carousel.Slide
            onClick={() =>
              navigate(
                `/cocktailbar/${cocktailbar_id}/order/cocktail/${cocktail.cocktail_id}`
              )
            }
            key={cocktail.cocktail_id}
          >
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
