import { Select, Image, Badge } from "@mantine/core";
import TitleRow from "../../components/molecules/TitleRow";
import SubtitleRow from "../../components/molecules/SubtitleRow";
import Divider from "../../components/molecules/Divider";

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
      <Image
        radius="md"
        height="12em"
        src=""
        alt="With default placeholder"
        withPlaceholder
      />
      <SubtitleRow
        left="도파민"
        right="동성로 술집 화려한 칵테일"
      ></SubtitleRow>
      <Badge color="violet">#관람차뷰</Badge>
      <Divider></Divider>
      <TitleRow left="실시간 인기글" right="more"></TitleRow>
    </>
  );
};

export default MainPage;
