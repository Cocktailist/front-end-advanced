import { useEffect, useState } from "react";
import { Button, Modal } from "@mantine/core";
import CustomMenuRow from "../../molecules/CustomMenuRow";
import * as S from "./style";
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";

// TODO: API로 option 들 받아와야함
// const customizeOptions = [
//   { name: "샷 추가", type: "counter" },
//   { name: "라임 주스", type: "selector" },
//   { name: "라임", type: "counter" },
//   { name: "설탕 추가", type: "counter" },
//   { name: "민트잎", type: "counter" },
//   { name: "얼음", type: "selector" },
// ];

const CustomizingSection = ({ options }) => {
	const [formData, setFormData] = useState([]);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const sendFormData = (data) => {
		//  formData를 백엔드로 전송!
	};

	return (
		<S.Wrapper>
			<Modal
				centered
				size="20em"
				opened={showModal}
				onClose={() => setShowModal(false)}
				title="주문이 완료되었습니다!"
				overlayColor="white"
				transition="fade"
				transitionDuration={600}
				transitionTimingFunction="ease"
				style={{ transform: "translateY(0em)" }}
			>
				{formData.length !== 0 ? (
					formData
						.filter((e) => Object.values(e)[0] !== 0)
						.map((e) => (
							<h1>{`${Object.keys(e)[0]} :  ${Object.values(e)[0]}`}</h1>
						))
				) : (
					<h1>다음번엔 커스터마이징도 이용해보세요!</h1>
				)}
			</Modal>
			<form
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
				action={sendFormData}
			>
				{options.map((option) => (
					<CustomMenuRow
						onChange={setFormData}
						left={option}
						type={"counter"}
					></CustomMenuRow>
				))}
				<Button
					style={{ position: "absolute", bottom: "3em" }}
					onClick={() => setShowModal(true)}
					size="lg"
					variant="gradient"
					gradient={{ from: "var(--primary-color)", to: "cyan" }}
				>
					주문하기
				</Button>
			</form>
		</S.Wrapper>
	);
};

export default CustomizingSection;
