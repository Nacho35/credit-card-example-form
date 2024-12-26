import styled from "styled-components";
import bgCardBack from "../assets/bg-card-back.png";

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
`;

export const CVC = styled.p`
	text-align: end;
	color: #fff;
	margin: 7rem 1.5rem;
`;
