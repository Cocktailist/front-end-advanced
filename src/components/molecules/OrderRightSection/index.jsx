import * as S from "./style";
import Btn from "../../atoms/Btn";

const OrderRightSection = ({ status, handleClick }) => {
  return (
    <S.Wrapper>
      <Btn handleClick={handleClick} status={status} />
    </S.Wrapper>
  );
};

export default OrderRightSection;
