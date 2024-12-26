import styled from "styled-components";
import bgCard from "../assets/bg-card-front.png";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const CardContainer = styled.div`
	background-image: url(${bgCard});
	background-repeat: no-repeat;
	object-fit: contain;
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding: 1rem 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	z-index: 2;
`;

export const ImageContainer = styled.div`
	align-self: flex-start;
	margin: 1rem;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardNumber = styled.h2`
	font-size: 1.5rem;
	margin-top: 2rem;
	color: white;
	word-spacing: 25px;
`;

export const CardData = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 80%;
	margin-bottom: 1rem;
`;

export const CardName = styled.p`
	color: white;
	text-transform: uppercase;
`;

export const CardDate = styled.p`
	color: white;
`;
