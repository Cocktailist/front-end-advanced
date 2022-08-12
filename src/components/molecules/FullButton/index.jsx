import * as S from "./style";

const FullButton = ({ children, onClick: setOpened }) => {
  return (
    <S.FullButton onClick={() => setOpened(true)}>{children}</S.FullButton>
  );
};

export default FullButton;
