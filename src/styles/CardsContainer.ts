import styled from "styled-components";
import bgMain from "../assets/bg-main-mobile.png";

export const CardsBackground = styled.div`
	background-image: url(${bgMain});
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 1024px) {
		min-height: 50vh;
		padding: 2rem 0;
	}
	@media (max-width: 768px) {
		min-height: 40vh;
		padding: 1rem 0;
	}
	@media (max-width: 480px) {
		min-height: 30vh;
		padding: 0.5rem 0;
	}
`;

export const CardsContainer = styled.div`
	background: transparent;
	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 1024px) {
		min-height: 50vh;
		padding: 2rem 0;
	}
	@media (max-width: 768px) {
		min-height: 40vh;
		padding: 1rem 0;
	}
	@media (max-width: 480px) {
		min-height: 30vh;
		padding: 0.5rem 0;
	}
`;

export const ZoomContainer = styled.div`
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 100%;
`;
