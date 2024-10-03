import styled from "styled-components";
import bgCard from "../assets/bg-card-front.png";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	margin: 1rem;
`;

export const CardContainer = styled.div`
	background-image: url(${bgCard});
	background-repeat: no-repeat;
	object-fit: contain;
	width: fit-content;
	height: fit-content;
	padding: 1rem;
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CardNumber = styled.h2`
	color: white;
`;

export const CardData = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 100%;
`;

export const CardName = styled.p`
	color: white;
`;

export const CardDate = styled.p`
	color: white;
`;
