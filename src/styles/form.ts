import styled from "styled-components";

export const FormContainer = styled.div`
	padding: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 400px;
	width: 100%;
	background-color: white;
	border-radius: 10px;
	padding: 1rem;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 1rem;
`;

export const SecondInputContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 1rem;
`;

export const SecondInputContainerRow = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const InputGroup = styled.div`
	display: flex;
	flex-direction: column;
	width: 48%;
`;

export const LabelContainer = styled.div`
	margin-bottom: 0.5rem;
`;

export const Label = styled.label`
	text-transform: uppercase;
	font-size: 0.75rem;
	letter-spacing: 0.1em;
	color: #220930;
`;

export const Input = styled.input`
	width: 100%;
	height: 2.5rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	border: 1px solid #ddd;
	font-size: 1rem;
	color: #220930;
	outline: none;
	margin-right: 10px;

	&:focus {
		border-color: #6741d9;
	}

	&::placeholder {
		color: #aaa;
	}
`;

export const InputOthers = styled(Input)`
	width: 48%;
`;

export const InputGroupRow = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

export const ButtonContainer = styled.div`
	width: 100%;
	margin-top: 1rem;
`;

export const Button = styled.button`
	width: 100%;
	height: 3rem;
	border-radius: 0.5rem;
	border: none;
	background-color: #220930;
	font-size: 1rem;
	color: #fff;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #3b0364;
	}
`;

// Card preview components are included but not used in the form
export const CardPreview = styled.div`
	position: relative;
	width: 100%;
	height: 200px;
	margin-bottom: 3rem;
`;

export const FrontCard = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 280px;
	height: 160px;
	background: linear-gradient(45deg, #4b0082, #8a2be2);
	border-radius: 10px;
	padding: 1rem;
	color: white;
	z-index: 2;
`;

export const BackCard = styled.div`
	position: absolute;
	top: 30px;
	right: 0;
	width: 280px;
	height: 160px;
	background-color: #ddd;
	border-radius: 10px;
	z-index: 1;
`;

export const CardNumber = styled.p`
	font-size: 1.25rem;
	letter-spacing: 0.1em;
	margin-top: 3rem;
`;

export const CardName = styled.p`
	font-size: 0.875rem;
	margin-top: 1rem;
`;

export const CardExpiry = styled.p`
	font-size: 0.875rem;
	position: absolute;
	bottom: 1rem;
	right: 1rem;
`;

export const CardCVC = styled.p`
	position: absolute;
	top: 70px;
	right: 1rem;
	font-size: 0.875rem;
	color: #333;
`;
