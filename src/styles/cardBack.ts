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
	align-items: center;
	background-image: url(${bgCardBack});
	background-repeat: no-repeat;
	object-fit: contain;
	overflow: hidden;
	width: 447px;
	height: 245px;
	padding: 0;
	margin: 0;
`;

export const CVC = styled.p`
	text-align: end;
	color: #fff;
	margin-right: 4rem;
`;
