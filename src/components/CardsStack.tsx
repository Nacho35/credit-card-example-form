import Logo from "../assets/card-logo.svg";
import {
	Card,
	CardContainer,
	CardData,
	CardDate,
	CardName,
	CardNumber,
	CardsStackContainer,
	ImageContainer,
} from "../styles/card";
import { CardBackContainer } from "../styles/cardBack";

const CardsStack = () => (
	<CardsStackContainer
		style={{
			display: "flex",
			flexDirection: "column",
			gap: "2rem",
			position: "relative",
		}}>
		{/* Tarjeta frontal */}
		<CardContainer style={{ position: "relative", marginBottom: "2rem" }}>
			<ImageContainer>
				<img src={Logo} alt="logo" />
			</ImageContainer>
			<Card>
				<CardNumber>0000 0000 0000 0000</CardNumber>
			</Card>
			<CardData>
				<CardName>Jane Appleseed</CardName>
				<CardDate>00/00</CardDate>
			</CardData>
		</CardContainer>
		{/* Tarjeta trasera debajo */}
		<CardBackContainer style={{ position: "relative" }}>
			{/* Aquí va el contenido de la tarjeta trasera, por ejemplo el CVC */}
		</CardBackContainer>
	</CardsStackContainer>
);

export default CardsStack;
