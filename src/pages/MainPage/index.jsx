import { Select } from "@mantine/core";
import TitleRow from "../../components/molecules/TitleRow";

const MainPage = () => {
  return (
    <>
      <Select
        placeholder="주변 칵테일바"
        data={[
          { value: "dopamin", label: "도파민" },
          { value: "ng", label: "칵테일바2" },
          { value: "svelte", label: "칵테일바3" },
          { value: "vue", label: "칵테일바4" },
        ]}
      />

      <TitleRow left="오늘의 추천 칵테일바" right="more"></TitleRow>
    </>

    // <LocationBox placeholder="hello world!"></LocationBox>
    //     <TodayCocktailBarSection>
    //       <TodayCocktailBarHeader>
    //         <TextMedium size="18.3px" color="rgb(131, 66, 213)">
    //           오늘의 추천 칵테일바
    //         </TextMedium>
    //         <TextLight size="15px" color="rgb(131, 66, 213)">
    //           more+
    //         </TextLight>
    //       </TodayCocktailBarHeader>
    //       <a href="./roro/cocktailbar_detail.html">
    //         <TodayCocktailBarImg src={cocktailbarImg} />
    //       </a>
    //       <TodayCocktailBarStoreSection>
    //         <TextMedium size="16.7px">{cocktailbar}</TextMedium>
    //         <TextLight size="15px">{cocktailbarDesc}</TextLight>
    //         <div></div>
    //         <div></div>
    //       </TodayCocktailBarStoreSection>
    //       <TodayCocktailBarTagSection>
    //         {cocktailbarTags.map((e) => (
    //           <TodayCocktailBarTag>{`#${e}`}</TodayCocktailBarTag>
    //         ))}
    //       </TodayCocktailBarTagSection>
    //     </TodayCocktailBarSection>
    //     <CrossLine />
    //     <TrendingPostSection>
    //       <TrendingPostHeader>
    //         <TextMedium size="18.3px" color="rgb(131, 66, 213)">
    //           실시간 인기글
    //         </TextMedium>
    //         <TextLight size="15px" color="rgb(131, 66, 213)">
    //           more+
    //         </TextLight>
    //       </TrendingPostHeader>
    //       <TrendingPostLists>
    //         {trendingPosts.map((e) => (
    //           <TrendingPost key={e.id} userImg={e.userImg} userName={e.userName} board={e.board} date={e.date} title={e.title} content={e.content}></TrendingPost>
    //         ))}
    //       </TrendingPostLists>
    //     </TrendingPostSection>
  );
};

export default MainPage;
