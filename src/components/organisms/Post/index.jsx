import { Text, Space } from "@mantine/core";
import ContentCol from "../../molecules/ContentCol";
import ContentTitleRow from "../../molecules/ContentTitleRow";
import * as S from "./style";

const Post = ({ image, nick_name, board, date, upper, lower }) => {
  return (
    <S.Wrapper>
      <ContentTitleRow
        image={image}
        nick_name={nick_name}
        board={board}
        date={date}
      ></ContentTitleRow>
      <ContentCol upper={upper} lower={lower}></ContentCol>
    </S.Wrapper>
  );
};

export default Post;
