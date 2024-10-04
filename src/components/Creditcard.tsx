import Logo from "../assets/card-logo.svg";
import {
	Card,
	CardContainer,
	CardData,
	CardDate,
	CardName,
	CardNumber,
	Container,
	ImageContainer,
} from "../styles/card.ts";

const Creditcard = () => {
	return (
		<Container>
			<CardContainer>
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
		</Container>
	);
};

export default Creditcard;
