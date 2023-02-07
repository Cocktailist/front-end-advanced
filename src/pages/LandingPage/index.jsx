import { Link } from "react-router-dom";
import { getTest } from "apis/getTest";

import barsAPI from "firebases/bars";

const LandingPage = () => {
	const handleClick = async () => {
		const result = await barsAPI.getBars();
		console.log("API Test Success", result);
	};

	return (
		<>
			<div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
				<Link to="/main">메인페이지로 이동!</Link>
				<Link to="/cocktailbar/1">칵테일바 페이지 이동!</Link>
				<Link to="/cocktailbar/1/order/menu">주문 페이지 이동!</Link>
				<Link to="/cocktailbar/1/order/cocktail/1">주문상세페이지 이동!</Link>
				<Link to="/cocktionary">칵셔너리 페이지 이동!</Link>
				<Link to="/test">테스트페이지 이동!</Link>
				<button onClick={handleClick}>API Test</button>
			</div>
		</>
	);
};

export default LandingPage;
