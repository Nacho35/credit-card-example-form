import styled from "styled-components";
import bgCardBack from "../assets/bg-card-back.png";
import bgMain from "../assets/bg-main-mobile.png";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background-image: url(${bgMain});
	background-repeat: no-repeat;
	background-size: cover;
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
