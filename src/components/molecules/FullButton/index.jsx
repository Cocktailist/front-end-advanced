import * as S from "./style";

const FullButton = ({ children, handleClick }) => {
	return <S.FullButton onClick={handleClick}>{children}</S.FullButton>;
};

export default FullButton;
