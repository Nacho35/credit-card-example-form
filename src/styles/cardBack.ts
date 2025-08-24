import styled from "styled-components";
import bgCardBack from "../assets/bg-card-back.png";
// Tarjeta trasera superpuesta y responsiva
export const CardBackContainer = styled.div`
	background-image: url(${bgCardBack});
	background-repeat: no-repeat;
	object-fit: contain;
	overflow: hidden;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 1.2rem;
	left: 1rem;
	z-index: 1;
	box-shadow: 0 0.15rem 0.8rem rgba(0, 0, 0, 0.1);

	@media (max-width: 1024px) {
		top: 0.7rem;
		left: 0.6rem;
	}
	@media (max-width: 768px) {
		top: 0.3rem;
		left: 0.2rem;
	}
	@media (max-width: 480px) {
		top: 0.1rem;
		left: 0.05rem;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const ContainerCvc = styled.div`
	display: flex;
	justify-content: flex-end;
	background-image: url(${bgCardBack});
	background-repeat: no-repeat;
	object-fit: contain;
	overflow: hidden;
	width: 100%;
	height: 100%;
	padding: 0;
	margin: 0;
	position: absolute;
	top: 40px;
	z-index: 1;
	left: 30px;
	filter: brightness(0.95) blur(0.5px);
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

	@media (max-width: 768px) {
		top: 28px;
		left: 20px;
	}
	@media (max-width: 480px) {
		top: 16px;
		left: 10px;
	}
`;

export const CVC = styled.p`
	text-align: end;
	color: #fff;
	margin: 7rem 1.5rem;
`;
