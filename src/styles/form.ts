import styled from "styled-components";
import bgMain from "../assets/bg-main-mobile.png";

export const RendersContainer = styled.div`
	background-image: url(${bgMain});
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Container = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: auto;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const SecondInputContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	margin: 20px;
`;

export const SecondInputContainerRow = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const InputGroup2 = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const LabelContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
`;

export const Label = styled.label`
	margin: 1rem;
	text-transform: uppercase;
`;

export const Input = styled.input`
	width: 80%;
	height: 2.5rem;
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: gray 1px solid;
	background-color: #f5f5f5;
	font-size: 1rem;
	font-family: inherit;
	color: #333;
	outline: none;
`;

export const InputOthers = styled.input`
	width: 15%;
	height: 2.5rem;
	margin: 0.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: gray 1px solid;
	background-color: #f5f5f5;
	font-size: 1rem;
	font-family: inherit;
	color: #333;
	outline: none;
`;

export const InputGroupRow = styled.div`
	display: flex;
	text-align: center;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Button = styled.button`
	width: 80%;
	height: 3.5rem;
	margin: 0.5rem;
	border-radius: 0.5rem;
	border: gray 1px solid;
	background-color: #220930;
	font-size: 1rem;
	font-family: inherit;
	color: #fff;
	outline: none;
`;
