import styled from "styled-components";
import bgMain from "../assets/bg-main-mobile.png";

export const CardsContainer = styled.div`
	background-image: url(${bgMain});
	background-repeat: no-repeat;
	background-size: cover;
	min-height: 50vh;
`;

export const ZoomContainer = styled.div`
	padding: 6rem 4rem;
	display: contents;
	float: right;
	align-items: center;
`;
