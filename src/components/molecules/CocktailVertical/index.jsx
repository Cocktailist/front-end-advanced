import { Text, Space } from "@mantine/core";
import * as S from "./style";

const CocktailVertical = ({ img, name, onClick }) => {
	return (
		<S.Wrapper onClick={onClick}>
			<img
				src={img}
				alt=""
				style={{ width: "5em", height: "10em", objectFit: "cover" }}
			/>
			<Space h="xs"></Space>
			<Text sx={{ textAlign: "center" }} size="sm">
				{name}
			</Text>
		</S.Wrapper>
	);
};

export default CocktailVertical;
