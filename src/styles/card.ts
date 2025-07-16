import styled from "styled-components";
import bgCard from "../assets/bg-card-front.png";

// Contenedor principal para apilar las tarjetas
export const CardsStackContainer = styled.div`
	position: relative;
	width: 100%;
	max-width: 28rem;
	min-width: 14rem;
	aspect-ratio: 1.6/1;
	margin: 0 auto;
	height: 100%;

	@media (max-width: 1024px) {
		max-width: 22rem;
		min-width: 11rem;
		aspect-ratio: 1.4/1;
	}
	@media (max-width: 768px) {
		max-width: 95vw;
		min-width: 80vw;
		aspect-ratio: 1.2/1;
	}
	@media (max-width: 480px) {
		max-width: 100vw;
		min-width: 95vw;
		aspect-ratio: 1.1/1;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const CardContainer = styled.div`
	background-image: url(${bgCard});
	background-repeat: no-repeat;
	background-size: cover;
	object-fit: contain;
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding: 1.2rem 0.5rem;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.15);

	@media (max-width: 1024px) {
		padding: 0.8rem 0.3rem;
	}
	@media (max-width: 768px) {
		padding: 0.5rem 0.2rem;
	}
	@media (max-width: 480px) {
		padding: 0.2rem 0.1rem;
	}
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
	width: 100%;
	height: 100%;
`;

export const CardNumber = styled.h2`
	font-size: 1.5rem;
	margin-top: 2rem;
	color: white;
	word-spacing: 25%;
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

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		font-size: 0.8rem;
		letter-spacing: 1px;
	}
`;

export const CardDate = styled.p`
	color: white;

	@media (max-width: 768px) {
		font-size: 0.9rem;
	}
	@media (max-width: 480px) {
		font-size: 0.8rem;
		letter-spacing: 1px;
	}
`;
